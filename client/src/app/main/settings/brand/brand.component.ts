import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AddbrandService } from "app/auth/service/addbrand.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { IBrand } from "app/interfaces/ibrand";
import { HttpErrorResponse } from "@angular/common/http";


@Component({
  selector: "app-brand",
  templateUrl: "./brand.component.html",
  styleUrls: ["./brand.component.scss"],
})
export class BrandComponent implements OnInit {
  public pageBasicText = 3;
  submitted = false;
  data: Array<IBrand> = [];
  brandForEdit!: IBrand;

  createbrand: FormGroup;
  editBrandForm: FormGroup;

  contentModel: any;

  errors: any = {};

  searchInput: string = "";

  constructor(
    private modalService: NgbModal,
    private brand: AddbrandService,
    public _router: Router,
    private toaster: ToastrService
  ) {

    this.createbrand = new FormGroup({
      name: new FormControl("", Validators.required),
      image: new FormControl(null),
      description: new FormControl(null),
    });

    this.editBrandForm = new FormGroup({
      name: new FormControl("", Validators.required),
      description: new FormControl(null),
      image: new FormControl(null),
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
    this.brand.allbrand().subscribe((res) => {
      this.data = res.data;
    });
  }


  AddBrand() {
    this.submitted = true;
    if (this.createbrand.valid) {

      const observer = {
        next: (res) => {
          this.closeModel(this.contentModel);
          this.toaster.success(res.message);
          this.data.push(res.data);
        },
        error: (error: HttpErrorResponse) => {
         this.errors = error.error.errors;
        },
      };
      this.brand.AddBrand(this.createbrand.value).subscribe(observer);
    }
  }

  editBrand(id: number) {
    const observer = {
      next: (res) => {
        this.brandForEdit = res.data;
        console.log(this.brandForEdit);

        this.editBrandForm.get("name").setValue(this.brandForEdit.name);
        this.editBrandForm
          .get("description")
          .setValue(this.brandForEdit.description);
      },
      error: (error) => {
        console.log(error);
      },
    };

    this.brand.getBrandid(id).subscribe(observer);
  }

  updateBrand() {
    // console.log(this.editBrandForm.value);

    const observer = {
      next: (res) => {
        this.closeModel(this.contentModel);
        this.AllData();
      },
      error: (error) => {
        console.log(error);
      },
    };
    this.brand
      .updateBrand(this.brandForEdit?.id, this.editBrandForm.value)
      .subscribe(observer);
  }

  deleteBrand(id: any) {
    console.log(id);
    this.brand.deleteBrand(id).subscribe((res) => {
      this.AllData();
    });
  }

  search(event) {

    this.brand.params = this.brand.params.set("search", event);

    this.AllData();
  }
}
