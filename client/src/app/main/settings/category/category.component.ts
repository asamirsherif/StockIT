import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { CategorytService } from "app/auth/service/category/category.service";
import { observable } from "rxjs";
import { ICategory } from "app/interfaces/icategory";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  public pageBasicText = 3;
  submitted = false;
  categories: ICategory[];
  contentModal;
  searchInput= "";

  createCategoryForm: FormGroup;
  editCategoryForm: FormGroup;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private categorytService: CategorytService
  ) {
    this.createCategoryForm = new FormGroup({
      CategoryCode: new FormControl("", Validators.required),
      CategoryName: new FormControl("", Validators.required),
    });

    this.editCategoryForm = new FormGroup({
      CategoryCode: new FormControl("", Validators.required),
      CategoryName: new FormControl("", Validators.required),
    });
  }

  openModal(contentModal) {
    this.contentModal = contentModal;
    this.modalService.open(contentModal);
  }

  openModal2(contentModal2) {
    this.contentModal = contentModal2;
    this.modalService.open(contentModal2);
  }

  ngOnInit(): void {
    this.getCategories();
  }

  //Create Category service
  createCategory() {
    this.submitted = true;

    if (this.createCategoryForm.valid) {
      const data = {
        name: this.createCategoryForm.value.CategoryName,
        code: this.createCategoryForm.value.CategoryCode,
      };

      const observed = {
        next: (res) => {
          this.modalService.dismissAll(this.contentModal);
          this.categories.push(res.data);
        },
      };

      this.categorytService.store(data).subscribe(observed);
    }
  }

  getCategories() {
    const observed = {
      next: (res) => {
        this.categories = res.data.categories;
      },
    };
    this.categorytService.get().subscribe(observed);
  }

  editCategory(id: number) {
    const observed = {
      next: (res) => {
        this.editCategoryForm.get("CategoryCode").setValue(res.data.code);
        this.editCategoryForm.get("CategoryName").setValue(res.data.name);
      },
    };
    this.categorytService.show(id).subscribe(observed);
  }

  updateCategory(id: number) {
    this.submitted = true;

    if (this.editCategoryForm.valid) {
      const data = {
        name: this.editCategoryForm.value.CategoryName,
        code: this.editCategoryForm.value.CategoryCode,
      };

      const observed = {
        next: (res) => {
          this.modalService.dismissAll(this.contentModal);
          this.getCategories();
        },
      };

      this.categorytService.update(id, data).subscribe(observed);
    }
  }

  deleteCategory(id: number) {
    const observed = {
      next: (res) => {
        this.getCategories();
      },
    };
    this.categorytService.delete(id).subscribe(observed);
  }

  search(event) {

    this.categorytService.params = this.categorytService.params.set("search", event);
    this.getCategories();

    }
}
