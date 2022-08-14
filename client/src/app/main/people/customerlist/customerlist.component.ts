import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ClientservService } from 'app/auth/service/client/clientserv.service';
import { Iclient } from 'app/interfaces/iclient';
import { Router } from "@angular/router";
//import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector: 'app-customerlist',
    templateUrl: './customerlist.component.html',
    styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
    public pageBasicText = 3;
    data: Iclient[];
    clientForEdit!: Iclient;

    createcustomerform: FormGroup;
    editClientForm: FormGroup;

    contentModel: any;
    submitted = false;
    errors: any = {};

    searchInput: string = "";
    constructor(private modalService: NgbModal, private fb: FormBuilder, private clientserv: ClientservService, public _router: Router) {
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
                console.log(res.data)
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

            return;
            const observer = {
                next: (res) => {

                },
                error: (err) => {

                }
            }
            this.clientserv.AddClient(this.createcustomerform.value).subscribe(observer);
        }
    }


    editClient(id: number) {
        const observer = {
            next: (res) => {
                this.clientForEdit = res.data;
                console.log(this.clientForEdit);

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
                this.AllData();
            },
            error: (error) => {
                console.log(error);
            },
        };
        this.clientserv.updateClient(this.clientForEdit?.id, this.editClientForm.value)
            .subscribe(observer);
    }


    deleteWare(id: any) {
        console.log(id);
        this.clientserv.deleteClient(id).subscribe((res) => {
            this.AllData();
        });
    }


    search(event) {

        this.clientserv.params = this.clientserv.params.set("search", event);

        this.AllData();
    }
}