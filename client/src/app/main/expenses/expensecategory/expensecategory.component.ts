import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseCategoryService } from 'app/auth/service/expense/expense-category.service';
import { IExpenseCategory } from 'app/interfaces/iexpense-category';

@Component({
  selector: 'app-expensecategory',
  templateUrl: './expensecategory.component.html',
  styleUrls: ['./expensecategory.component.scss']
})
export class ExpensecategoryComponent implements OnInit {
  public pageBasicText = 3;
  searchInput = "";
  submitted = false;
  contentmodel: any;

  expenseCategoies: IExpenseCategory[];
  errors: any = {};


  createCategoryForm: FormGroup;
  editCategoryForm: FormGroup;
  constructor(private modalService: NgbModal, private fb: FormBuilder, public _router: Router, private expenseCategoryService: ExpenseCategoryService) {
    this.createCategoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', null)
    })
    this.editCategoryForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', null)
    })
  }


  openModal(contentModal) {
    this.contentmodel = contentModal;
    this.modalService.open(contentModal);
  }
  openModal2(contentModal2) {
    this.contentmodel = contentModal2;
    this.modalService.open(contentModal2);
  }
  ngOnInit(): void {
    this.getall()
  }

  getall() {
    //then
    const observer = {
      next: (res) => {
        this.expenseCategoies = res.data
      },
      error: (error) => {
        console.log(error);

      }
    }

    //first
    this.expenseCategoryService.getall().subscribe(observer)
  }


  store() {
    this.submitted = true;
    if (this.createCategoryForm.valid) {
      const user = JSON.parse(localStorage.getItem(`currentUser`))
      const formdata = this.createCategoryForm.value;

      //then
      const observer = {
        next: (result) => {
          this.modalService.dismissAll(this.contentmodel)
          this.expenseCategoies.push(result.data)
        },
        error: (error) => {
          console.log(error);
        }
      }

      let data: IExpenseCategory = {
        name: formdata.name,
        description: formdata.description,
        user_id: user.id
      }

      //first 
      this.expenseCategoryService.store(data).subscribe(observer)
    }
  }
  destroy(index) {
    let id = this.expenseCategoies[index].id;
    //then
    const observer = {
      next: (res) => {
        this.expenseCategoies.splice(index,1);
      },
      error: (error) => {
        console.log(error)
      }
    }

    //first
    this.expenseCategoryService.destroy(id).subscribe(observer)
  }
  edit(id) {
    //then
    const observer = {
      next: (res) => {
        this.editCategoryForm.get("name").setValue(res.data.name)
        this.editCategoryForm.get("description").setValue(res.data.description)
      }
    }

    //first
    this.expenseCategoryService.show(id).subscribe(observer)
  }
  update(index) {
    this.submitted = true;
    let id = this.expenseCategoies[index].id;
    if (this.editCategoryForm.valid) {
      const observer = {
        next: (res) => {
          this.modalService.dismissAll(this.contentmodel)
          this.expenseCategoies[index] = res.data
        },
        error: (error) => {
          console.log(error);
        }
      }
      //first
      this.expenseCategoryService.update(id, this.editCategoryForm.value).subscribe(observer)
    }
  }
  search(event) {
    this.expenseCategoryService.params = this.expenseCategoryService.params.set("search", event)
    this.getall()
  }
}

