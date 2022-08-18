import { WarehousservService } from './../../../auth/service/warehous/warehousserv.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { Warehous } from 'app/interfaces/warehous';
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  public pageBasicText = 3;
  data: Array<Warehous> = [];
  wareForEdit!: Warehous;

  createwarehous:FormGroup;
  editWareForm: FormGroup;

  contentModel: any;
  submitted = false;
  errors: any = {};

  searchInput: string = "";

  constructor(private modalService: NgbModal, private _ware: WarehousservService,
    public _router: Router,
    private toaster: ToastrService) { 
    this.createwarehous = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('',Validators.email),
      mobile: new FormControl(null),
      country: new FormControl(null),
      city: new FormControl(null),
      zip:new FormControl(null)
    });
    this.editWareForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('',Validators.email),
      mobile: new FormControl(null),
      country: new FormControl(null),
      city: new FormControl(null),
      zip:new FormControl(null)
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
    this._ware.allware().subscribe((res) => {
    this.data = res.data;
    });
    }
    AddWare() {
      this.submitted = true;
    if (this.createwarehous.valid) {
    const observer = {
    next: (res) => {
    this.closeModel(this.contentModel);
    this.toaster.success(res.message);
    this.data.push(res.data);
    },
    error: (error: HttpErrorResponse) => {
    console.log(error.status);
    },
    };
    this._ware.AddWare(this.createwarehous.value).subscribe(observer);
    }
    }

    editWare(id: number) {
      const observer = {
      next: (res) => {
      this.wareForEdit = res.data;
      console.log(this.wareForEdit);
    
      this.editWareForm.get("name").setValue(this.wareForEdit.name);
      this.editWareForm.get("email").setValue(this.wareForEdit.email);
      this.editWareForm.get("mobile").setValue(this.wareForEdit.mobile);
      this.editWareForm.get("country").setValue(this.wareForEdit.country);
      this.editWareForm.get("city").setValue(this.wareForEdit.city);
      this.editWareForm.get("zip").setValue(this.wareForEdit.zip);
      },
      error: (error) => {
      console.log(error);
      },
      };
    
      this._ware.getWareid(id).subscribe(observer);
      } 
      updateWare() {
       
        const observer = {
        next: (res) => {this.closeModel(this.contentModel);
        this.AllData();
        },
        error: (error) => {
        console.log(error);
        },
        };
        this._ware.updateWare(this.wareForEdit?.id, this.editWareForm.value)
        .subscribe(observer);
        }    

        deleteWare(id: any) {
          console.log(id);
          this._ware.deleteWare(id).subscribe((res) => {
          this.AllData();
          });
          }
        
          search(event) {
        
          this._ware.params = this._ware.params.set("search", event);
        
          this.AllData();
          }
}
