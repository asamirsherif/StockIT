import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ClientservService } from 'app/auth/service/client/clientserv.service';
import { Iclient } from 'app/interfaces/iclient';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
@Component({
    selector: 'app-customerlist',
    templateUrl: './customerlist.component.html',
    styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
    public pageBasicText = 3;
    data: Iclient[];
    clientForEdit!: Iclient;
    clientForShow!: Iclient;

    createcustomerform: FormGroup;
    editClientForm: FormGroup;

    contentModel: any;
    submitted = false;
    errors: any = {};

    searchInput: string = "";
    searchInputcode= "";
    searchInputname = "";
    searchInputemail = "";
    searchInputphone = "";
    p: number = 1;
    total: number = 0;
    constructor(private modalService: NgbModal, private fb: FormBuilder,private _toastr: ToastrService,private clientserv: ClientservService, public _router: Router) {
        this.createcustomerform = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
            country: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required)
        });
        this.editClientForm = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
            country: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            address: new FormControl('', Validators.required),
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
    openModal3(contentModal3) {

        this.modalService.open(contentModal3);
    }
    ngOnInit(): void {
        this.AllData();
    }
    AllData() {
        const observer = {
            next: (res) => {
                this.data = res.data
                //console.log(res)
                //this.total=res.meta.total
                //console.log(this.total)

            },
            error: (error) => {
                console.log(error);
            }
        }
        this.clientserv.allClient().subscribe(observer)
    }

    AddClient() {
        this.submitted = true;
        if (this.createcustomerform.valid) {

            const observer = {
                next: (res) => {
                    this.closeModel(this.contentModel)
                    this._toastr.success('New Client has been added');
                    this.data.push(res.data)
                }, error: (error: HttpErrorResponse) => {
                    this.errors = error.error.errors;
                    this._toastr.error('Make sure for your data!');
                }

            }
            this.clientserv.AddClient(this.createcustomerform.value).subscribe(observer);
        }
    }

    editClient(id: number) {
        const observer = {
            next: (res) => {
                this.clientForEdit = res.data;

                this.editClientForm.get("name").setValue(this.clientForEdit.name);
                this.editClientForm.get("email").setValue(this.clientForEdit.email);
                this.editClientForm.get("phone").setValue(this.clientForEdit.phone);
                this.editClientForm.get("country").setValue(this.clientForEdit.country);
                this.editClientForm.get("city").setValue(this.clientForEdit.city);
                this.editClientForm.get("address").setValue(this.clientForEdit.address);
            },
            error: (error) => {
                console.log(error);
            },
        };

        this.clientserv.getClientid(id).subscribe(observer);
    }

    updateClient() {

        const observer = {
            next: (res) => {
                this.closeModel(this.contentModel);
                this._toastr.success('customer has been updated');
                this.AllData();
            }, error: (error: HttpErrorResponse) => {
                this.errors = error.error.errors;
            }
        };
        this.clientserv.updateClient(this.clientForEdit?.id, this.editClientForm.value)
            .subscribe(observer);
    }

    deleteClient(id: number) {
        const observer = {
            next: (res) => {
                this.AllData()
            },
            error: (err) => {
                this.errors = err.error.errros;
            }
        }
        this.clientserv.deleteClient(id).subscribe(observer)
    }

    showClient(id: number) {
        const observer = {
            next: (res) => {
                this.clientForShow = res.data
            },
            error: (err) => {
                this.errors = err.error.errros;
            }
        }
        this.clientserv.getClientid(id).subscribe(observer);
    }

    search(event) {

        this.clientserv.params = this.clientserv.params.set("search", event);

        this.AllData();
    }

    pageChangeEvent(event: number) {
        this.p = event;
        this.AllData();
    }
}