import { SupplierservService } from './../../../auth/service/supplier/supplierserv.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Isupplier } from 'app/interfaces/isupplier';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from "ngx-toastr";
@Component({
selector: 'app-supplierlist',
templateUrl: './supplierlist.component.html',
styleUrls: ['./supplierlist.component.scss']
})
export class SupplierlistComponent implements OnInit {
public pageBasicText = 3;
data: Isupplier[];
supplierForEdit!: Isupplier;
SupplierForShow!: Isupplier;

createsupplierform: FormGroup;
editsupplierForm: FormGroup;

searchInput:any;
searchInputcode= "";
searchInputname = "";
searchInputemail = "";
searchInputphone = "";
p: number = 1;
total: number = 0;

contentModel: any;
submitted = false;
errors: any = {};
constructor(private modalService: NgbModal,private fb:FormBuilder,private _toastr: ToastrService, private supplierserv: SupplierservService, public _router: Router) {
this.createsupplierform = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
});
this.editsupplierForm = new FormGroup({
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
        },
        error: (error) => {
            console.log(error);
        }
    }
    this.supplierserv.allSupplier().subscribe(observer)
}


AddSupplier() {
    this.submitted = true;
    if (this.createsupplierform.valid) {

        const observer = {
            next: (res) => {
                this.closeModel(this.contentModel);
                this._toastr.success('New Supplier has been added');
                this.data.push(res.data)
            },
            error: (error: HttpErrorResponse) => {
                this.errors = error.error.errors;
                this._toastr.error('Make sure for your data!');
                }
            
        }
        this.supplierserv.AddSupplier(this.createsupplierform.value).subscribe(observer);
    }
}


editSupplier(id: number) {
   
    const observer = {
        next: (res) => {
            this.supplierForEdit = res.data;

            this.editsupplierForm.get("name").setValue(this.supplierForEdit.name);
            this.editsupplierForm.get("email").setValue(this.supplierForEdit.email);
            this.editsupplierForm.get("phone").setValue(this.supplierForEdit.phone);
            this.editsupplierForm.get("country").setValue(this.supplierForEdit.country);
            this.editsupplierForm.get("city").setValue(this.supplierForEdit.city);
            this.editsupplierForm.get("address").setValue(this.supplierForEdit.address);
        },
        error: (error) => {
            console.log(error);
        },
    };

    this.supplierserv.getSipplierid(id).subscribe(observer);
}


updateSupplier() {
    this.submitted = true;
    if (this.editsupplierForm.valid){
    const observer = {
        next: (res) => {
            this.closeModel(this.contentModel);
            this._toastr.success('Supplier updated');
            this.AllData();
        },
        error: (error: HttpErrorResponse) => {
            this.errors = error.error.errors;
            }
    };
    this.supplierserv.updateSupplier(this.supplierForEdit?.id, this.editsupplierForm.value)
        .subscribe(observer);
}}


deleteSupplier(id: number) {
    const observer = {
        next: (res) => {
            this.AllData()
        },
        error: (err) => {
            this.errors = err.error.errros;
        }
    }
    this.supplierserv.deleteSupplier(id).subscribe(observer)
}


showSupplier(id: number) {
    const observer = {
        next: (res) => {
            this.SupplierForShow = res.data
        },
        error: (err) => {
            this.errors = err.error.errros;
        }
    }
    this.supplierserv.getSipplierid(id).subscribe(observer);
}


search(event) {

    this.supplierserv.params = this.supplierserv.params.set("search", event);

    this.AllData();
}

pageChangeEvent(event: number) {
    this.p = event;
    this.AllData();
}
}