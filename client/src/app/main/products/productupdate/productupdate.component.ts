import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl,Validators,FormBuilder,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AddbrandService } from "app/auth/service/addbrand.service";
import { CategorytService } from "app/auth/service/category/category.service";
import { ProductService } from "app/auth/service/products/product.service";
import { UnitservService } from "app/auth/service/unit/unitserv.service";
import { IBrand } from "app/interfaces/ibrand";
import { ICategory } from "app/interfaces/icategory";
import { IProduct } from "app/interfaces/iproduct";
import { Unit } from "app/interfaces/unit";
AddbrandService;

@Component({
  selector: "app-productupdate",
  templateUrl: "./productupdate.component.html",
  styleUrls: ["./productupdate.component.scss"],
})
export class ProductupdateComponent implements OnInit {
  public pageBasicText = 3;
  submitted = false;
  data: any = {};
  product_id: number;
  errors: any = {};
  brands: IBrand;
  categories: ICategory;
  units: Unit;

  brand_data: number;
  category_data: number;
  product_unit: number;
  sale_unit: number;
  purchase_unit: number;

  barcode_types = ["Code 128", "Code 39", "EAN 8", "EAN 13", "UPC"];
  type_barcode: string;

  tax_types = ["Exclusive", "Inclusive"];
  tax_type: string;

  productupdateForm: FormGroup;

  constructor(



    
    private fb: FormBuilder,
    public _router: Router,
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute,
    private _brandService: AddbrandService,
    private _categorytService: CategorytService,
    private _unitservService: UnitservService
  ) {
    this.productupdateForm = new FormGroup({
      name: new FormControl("", Validators.required),
      code: new FormControl("", Validators.required),
      brand: new FormControl("", Validators.required),
      category_id: new FormControl("", Validators.required),
      type_barcode: new FormControl("Code 128", Validators.required),
      cost: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      unit_id: new FormControl("", Validators.required),
      unit_sale_id: new FormControl("", Validators.required),
      unit_purchase_id: new FormControl("", Validators.required),
      tax_method: new FormControl("Exclusive", Validators.required),
      product_tax: new FormControl(0),
      stockalert: new FormControl(0),
      image: new FormControl([null]),
    });
  }

  ngOnInit(): void {
    const id = +this._activatedRoute.snapshot.paramMap.get("id");
    this.editProuctForm(id);
    this.getAllBrands();
    this.getAllCategories();
    this.getAllUnits();
  }

  UppProduct() {
    this.submitted = true;
    if (this.productupdateForm.valid) {
      const observer = {
        next: (result) => {
          console.log(result, "asdasd");
        },
        error: (error) => {
          // console.log("error occured", error)
          this.errors = error;
          console.log(this.errors.errors);
        },
      };

      //this.product.UppProduct(this.productupdate.value).subscribe(observer);
    }
  }

  editProuctForm(id: number) {
    const observed = {
      next: (res) => {

        this.productupdateForm.get("name").setValue(res.data.name);
        this.productupdateForm.get("code").setValue(res.data.code);
        this.productupdateForm.get("cost").setValue(res.data.cost);
        this.productupdateForm.get("price").setValue(res.data.price);
        this.productupdateForm.get("unit_id").setValue(res.data.unit.name);
        this.productupdateForm
          .get("unit_sale_id")
          .setValue(res.data.unitSale.name);
        this.productupdateForm
          .get("product_tax")
          .setValue(res.data.tax_percent);
        this.productupdateForm.get("image").setValue(res.data.images);

        //Select data
        this.brand_data = res.data.brand.id;
        this.category_data = res.data.category.id;
        this.type_barcode = res.data.type_barcode;
        this.product_unit = res.data.unit.id;
        this.sale_unit = res.data.unitPurchase.id;
        this.purchase_unit = res.data.unitPurchase.id;
        this.tax_type = res.data.tax_method;
        this.product_id = res.data.id;
      },
    };

    this._productService.show(id).subscribe(observed);
  }

  getAllBrands() {
    const observed = {
      next: (res) => {
        this.brands = res.data;
      },
    };
    this._brandService.allbrand().subscribe(observed);
  }

  getAllCategories() {
    const observed = {
      next: (res) => {
        this.categories = res.data.categories;
      },
    };
    this._categorytService.get().subscribe(observed);
  }

  getAllUnits() {
    const observed = {
      next: (res) => {
        this.units = res.data.units;
      },
    };
    this._unitservService.allunit().subscribe(observed);
  }

  updateProduct(id: number) {
    this.submitted = true;
    if (this.productupdateForm.valid) {
        const data:any = {

          name: this.productupdateForm.value.name,
          code: this.productupdateForm.value.code,
          cost: this.productupdateForm.value.cost,
          price: this.productupdateForm.value.price,
          unit_id: this.productupdateForm.value.unit_id,
          brand: this.productupdateForm.value.brand,
          category_id: this.productupdateForm.value.category_id,
          type_barcode: this.productupdateForm.value.type_barcode,
          unit_sale_id: this.productupdateForm.value.unit_sale_id,
          unit_purchase_id:this.productupdateForm.value.unit_purchase_id,
          tax_method: this.productupdateForm.value.tax_method,
          product_tax: this.productupdateForm.value.product_tax,
          stockalert: this.productupdateForm.value.stockalert,
          image: this.productupdateForm.value.image,
        };
        console.log(data);

        
        const observed = {
          next: (res) => {
            this._router.navigate(['productlist'])
          },
        };

        this._productService.update(id,data).subscribe(observed);
      }
    
  }
}
