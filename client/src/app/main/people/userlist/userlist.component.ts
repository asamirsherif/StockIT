import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserservService } from 'app/auth/service/user/userserv.service';
import { Iuser } from 'app/interfaces/iuser';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from "ngx-toastr";
import { Irole } from 'app/interfaces/irole';
import { GrouppermissionservService } from 'app/auth/service/permission/grouppermissionserv.service';
@Component({
    selector: 'app-userlist',
    templateUrl: './userlist.component.html',
    styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
    searchInput: any;
    createuserForm: FormGroup;
    edituserForm: FormGroup;
    data: Iuser[];
    userForEdit!: Iuser;
    contentModel: any;
    submitted = false;
    errors: any = {};
    RoleArray:Irole[]
    p: number = 1;
    total: number = 0;
    constructor(private modalService: NgbModal, private fb: FormBuilder,private roleserv:GrouppermissionservService ,private _toastr: ToastrService, private userserv: UserservService, public _router: Router) {
        this.createuserForm = new FormGroup({
            firstname: new FormControl('', Validators.required),
            lastname: new FormControl('', Validators.required),
            username: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            phone: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            image: new FormControl(null),
            role_id: new FormControl('', Validators.required)
        });
        this.edituserForm = new FormGroup({
            firstname: new FormControl('', Validators.required),
            lastname: new FormControl('', Validators.required),
            username: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            phone: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            image: new FormControl(null),
            role_id: new FormControl('', Validators.required)
        })
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

        this.roleserv.allRole().subscribe(

            (res) => {
      
              this.RoleArray = res.data;
      
              console.log(this.RoleArray);
            },
      
            (err: any) => {
      
              console.log(err);
      
            }
      
          );
    }

    AllData() {
        const observer = {
            next: (res) => {
                this.data = res.data
                console.log(res.data)
            },
            error: (error) => {
                console.log(error);
            }
        }
        this.userserv.allUser().subscribe(observer)
    }


    AddUser() {
        this.submitted = true;
        if (this.createuserForm.valid) {

            const observer = {
                next: (res) => {
                    this.closeModel(this.contentModel);
                    this._toastr.success('New User has been added');
                    this.data.push(res.data)
                },
                error: (error: HttpErrorResponse) => {
                    this.errors = error.error.errors;
                    this._toastr.error('Make sure for your data!');
                }

            }
            this.userserv.AddUser(this.createuserForm.value).subscribe(observer);
        }
    }

    editUser(id: number) {
        console.log(id)
        const observer = {
            next: (res) => {
                this.userForEdit = res.data;
               console.log(res.data)
                this.edituserForm.get("firstname").setValue(this.userForEdit.firstname);
                this.edituserForm.get("email").setValue(this.userForEdit.email);
                this.edituserForm.get("phone").setValue(this.userForEdit.phone);
                this.edituserForm.get("lastname").setValue(this.userForEdit.lastname);
                this.edituserForm.get("username").setValue(this.userForEdit.username);
                this.edituserForm.get("password").setValue(this.userForEdit.password);
                this.edituserForm.get("image").setValue(this.userForEdit.image);
                this.edituserForm.get("role").setValue(this.userForEdit.role);
            },
            error: (error) => {
                console.log(error);
            },
        };

        this.userserv.getUserid(id).subscribe(observer);
    }


    updateUser() {
        this.submitted = true;
        if (this.edituserForm.valid) {
            const observer = {
                next: (res) => {
                    this.closeModel(this.contentModel);
                    this._toastr.success('User updated');
                    this.AllData();
                },
                error: (error: HttpErrorResponse) => {
                    this.errors = error.error.errors;
                }
            };
            this.userserv.updateUser(this.userForEdit?.id, this.edituserForm.value)
                .subscribe(observer);
        }
    }
    search(event) {

        this.userserv.params = this.userserv.params.set("search", event);

        this.AllData();
    }

    pageChangeEvent(event: number) {
        this.p = event;
        this.AllData();
    }
}