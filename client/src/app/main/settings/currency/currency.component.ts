import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,
} from "@angular/forms";
import { Icurreny } from "app/interfaces/icurreny";
import { CurrencyService } from "app/auth/service/currency/currency.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector: "app-currency",
    templateUrl: "./currency.component.html",
    styleUrls: ["./currency.component.scss"],
})
export class CurrencyComponent implements OnInit {
    public pageBasicText = 3;
    data: Array<Icurreny> = [];
    currForEdit!: Icurreny;

    createcurrency: FormGroup;
    editCurrForm: FormGroup;
    contentModel: any;
    submitted = false;
    errors: any = {};

    p: number = 1;
    total: number = 0;

    searchInput: string = "";
    constructor(
        private modalService: NgbModal,
        private fb: FormBuilder,
        private _curr: CurrencyService,
        public _router: Router,
        private toaster: ToastrService
    ) {
        this.createcurrency = new FormGroup({
            name: new FormControl("", Validators.required),
            code: new FormControl(null),
            symbol: new FormControl(null),
        });
        this.editCurrForm = new FormGroup({
            name: new FormControl("", Validators.required),
            code: new FormControl(null),
            symbol: new FormControl(null),
        });
    }

    openModal(contentModal) {
        this.contentModel = contentModal;
        this.modalService.open(contentModal);
    }
    closeModel(contentModal) {
        this.modalService.dismissAll(contentModal);
    }
    openModal2(contentModal2) {
        this.contentModel = contentModal2;
        this.modalService.open(contentModal2);
    }
    ngOnInit(): void {
        this.AllData();
    }
    AllData() {
        this._curr.allcurr().subscribe((res) => {
            this.data = res.data;
        });
    }
    AddCurr() {
        this.submitted = true;
        if (this.createcurrency.valid) {
            const observer = {
                next: (res) => {
                    this.closeModel(this.contentModel);
                    this.toaster.success("Currency added successfuly");
                    this.data.push(res.data);
                },
                error: (error: HttpErrorResponse) => {
                    this.toaster.error("Please check your input data!", "Error");

                    this.errors = error.error.errors;
                },
            };
            this._curr.AddCurr(this.createcurrency.value).subscribe(observer);
        }
    }

    editCurr(id: number) {
        const observer = {
            next: (res) => {
                this.currForEdit = res.data;
                console.log(this.currForEdit);

                this.editCurrForm.get("name").setValue(this.currForEdit.name);
                this.editCurrForm.get("code").setValue(this.currForEdit.code);
                this.editCurrForm
                    .get("symbol")
                    .setValue(this.currForEdit.symbol);
            },
            error: (error) => {
                console.log(error);
            },
        };

        this._curr.getCurrid(id).subscribe(observer);
    }
    updateCurr() {
        const observer = {
            next: (res) => {
                this.closeModel(this.contentModel);
                this.AllData();
            },
            error: (error: HttpErrorResponse) => {
                this.errors = error.error.errors;
            },
        };
        this._curr
            .updateCurr(this.currForEdit?.id, this.editCurrForm.value)
            .subscribe(observer);
    }

    deleteCurr(id: any) {
        console.log(id);
        this._curr.deleteCurr(id).subscribe((res) => {
            this.AllData();
        });
    }

    search(event) {
        this._curr.params = this._curr.params.set("search", event);

        this.AllData();
    }

    pageChangeEvent(event: number) {
        this.p = event;
        this.AllData();
    }
}
