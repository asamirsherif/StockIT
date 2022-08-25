import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { WarehousservService } from "app/auth/service/warehous/warehousserv.service";
import { ClientservService } from "app/auth/service/client/clientserv.service";
import { ProductSearchService } from "app/auth/service/purchase/product-search.service";
import { IProduct } from "app/interfaces/iproduct";
import { ISale } from "app/interfaces/isales";
import { ISaleDetails } from "app/interfaces/isale-details";
import { Iclient } from "app/interfaces/iclient";
import { SaleService } from "app/auth/service/sale/sale.service";

@Component({
    selector: "app-createsales",
    templateUrl: "./createsales.component.html",
    styleUrls: ["./createsales.component.scss"],
})
export class CreatesalesComponent implements OnInit {
    //my vars
    searchInput = "";
    submitted: boolean = false;
    errors: any = {};
    orderTax: number = 0;
    discount: number = 0;
    shipping: number = 0;
    total: number = 0;
    grandTotal: number = 0;
    warehouse_id: number;

    //for touchspin bug
    wannaPass: boolean = false;

    //for listing
    warehouses: Array<any>;
    clients: Iclient[];
    products: IProduct[];
    saleDetails: ISaleDetails[] = [];

    createSaleForm: FormGroup;

    constructor(
        private _warehouseService: WarehousservService,
        private _clientService: ClientservService,
        private _productSearchService: ProductSearchService,
        private _toastr: ToastrService,
        private _saleService: SaleService
    ) {
        this.createSaleForm = new FormGroup({
            date: new FormControl("", Validators.required),
            client: new FormControl(null, Validators.required),
            warehouse: new FormControl(null, Validators.required),
            shipping: new FormControl(0),
            tax_rate: new FormControl(0),
            discount: new FormControl(0),
            status: new FormControl("Completed"),
            payment_status: new FormControl("PENDING"),
            notes: new FormControl(""),
        });
    }

    ngOnInit(): void {
        //get all warehouses
        this._warehouseService.allware().subscribe({
            next: (res) => {
                this.warehouses = res.data;
            },
        });

        //get all supplies
        this._clientService.allClient().subscribe({
            next: (res) => {
                this.clients = res.data;
            },
        });
    }

    getWarehous(res) {
        this.products = [];
        this.saleDetails = [];
    }

    //// search from search service
    salesSearch(event) {
        if (!this.warehouse_id) this._toastr.error("please choose warehouse");
        else
            this._productSearchService
                .salesSearch(event, this.warehouse_id)
                .subscribe({
                    next: (res) => {
                        this.products = res.data;
                        console.log(this.products);

                    },
                });
    }

    //////////////////// search products for purchase warehouse ///////////////////////

    // add new sale detail from search input
    addSaleDetail(i) {
        //if sale detail not exist then prepare it and push to saleDetails Array
        if (!this.checkProductExist(this.saleDetails, this.products[i])) {
            let saleDetail: ISaleDetails = {
                product_id: this.products[i].id,
                quantity: 1,
                sale_unit_id: this.products[i].unitSale.id,
                unit_price: this.products[i].total_price,
                subtotal: this.countSubTotal(
                    1,
                    this.products[i].tax_cost,
                    this.products[i].cost
                ),
                tax_percent: this.products[i].tax_percent,
                tax_method: this.products[i].tax_method,
                product: this.products[i],
                discount: 0,
            };

            //push to Purchase details
            this.saleDetails.push(saleDetail);

            //if it already exist then only ++ quantity
        } else {
            let indexOfProduct = this.saleDetails.findIndex(
                (val) => val.product.id == this.products[i].id
            ); //find it

            let saleDD = this.saleDetails[indexOfProduct]; // carry it
            saleDD.quantity++; // increase qunatity
            saleDD.subtotal = this.countSubTotal(
                saleDD.quantity,
                saleDD.product.tax_cost,
                saleDD.product.cost
            ); //then count new total for puarchase
        }

        // count totals for preview
        this.countTotal();
        this.countGrandTotal();
    }

    // remove purchase detail from Array with index from table
    removeSaleDetail(i) {
        this.saleDetails.splice(i, 1);

        // count totals for preview
        this.countTotal();
        this.countGrandTotal();
    }

    checkProductExist(productList: Array<any>, product: any) {
        return productList.find((val) => {
            return val.product.id === product.id;
        });
    }
    ////////////////////////////   counts /////////////////////////////////////////
    countChange(value, i) {
        this.saleDetails[i].quantity = value;
        this.saleDetails[i].subtotal = this.countSubTotal(
            this.saleDetails[i].quantity,
            this.saleDetails[i].product.tax_cost,
            this.saleDetails[i].product.cost
        );
        this.countTotal();
        this.countGrandTotal();
    }
    countTax(quantity: number, tax_cost: number) {
        return quantity * tax_cost;
    }
    countSubTotal(quantity: number, tax_cost: number, cost: number) {
        return quantity * cost + this.countTax(quantity, tax_cost);
    }
    countOrderTax() {
        this.orderTax = (this.total / 100) * this.createSaleForm.value.tax_rate;
    }
    countDiscount() {
        this.discount = this.createSaleForm.value.discount;
    }
    countShipping() {
        this.shipping = this.createSaleForm.value.shipping;
    }
    countGrandTotal() {
        this.grandTotal =
            +this.total + +this.orderTax + +this.shipping - +this.discount;
    }
    //called in every opration
    countTotal() {
        this.total = 0;
        this.saleDetails.forEach((element) => {
            this.total += element.subtotal;
        });
        this.countOrderTax();
        this.countDiscount();
        this.countShipping();
    }
    ////////////////////////////////      store Sale     /////////////////////////////////
    storeSale() {
        this.submitted = true;
        //if no product in Sale
        if (this.saleDetails.length == 0) {
            this._toastr.error("please choose product!", "Error");
            return;
        }

        //if valid
        if (this.createSaleForm.valid && this.wannaPass) {
            const formData = this.createSaleForm.value;
            const user = JSON.parse(localStorage.getItem(`currentUser`));
            const data: ISale = {
                date: formData.date,
                discount: formData.discount,
                tax_rate: formData.tax_rate,
                notes: formData.notes,
                shipping: formData.shipping,
                status: formData.status,
                GrandTotal: this.grandTotal,
                paid_amount: 0,
                client_id: formData.client,
                user_id: user.id,
                details: this.saleDetails,
                payment_status: formData.payment_status,
                due: formData.due,
                warehouse_id: formData.warehouse,
                payment: 1,
            };



            const observer = {
                next: (res) => {
                    this._toastr.success("New sale done");
                    //reset all
                    this.saleDetails = [];
                    this.createSaleForm.reset();
                    this.countGrandTotal();
                },
                error: (err) => {
                    this.errors = err.error.errors;
                    this._toastr.error("Make sure for your data!");
                },
            };
            this._saleService.store(data).subscribe(observer);
        }
    }

    //for touchspin bug
    passMe() {
        this.wannaPass = true;
    }
}
