import { Unit } from "./../../../interfaces/unit";
import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UnitservService } from "app/auth/service/unit/unitserv.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";
import { basename } from "path";

@Component({
  selector: "app-unit",
  templateUrl: "./unit.component.html",
  styleUrls: ["./unit.component.scss"],
})
export class UnitComponent implements OnInit {
  public pageBasicText = 3;
  Op: any = ["/", "+", "*"];
  Base: any = [];
  data: Array<Unit> = [];
  
  // if(data){
  //   console.log(data)
  //   for (let value in data) {
  //     this.Base.push(data.name)
  //   }
  // }
  unitForEdit!: Unit;

  createunit: FormGroup;
  editUnitForm: FormGroup;

  contentModel: any;
  submitted = false;
  errors: any = {};
  searchInput: string = "";
  constructor(
    private modalService: NgbModal,
    private _unit: UnitservService,
    public _router: Router,
    private toaster: ToastrService
  ) {
    this.createunit = new FormGroup({
      name: new FormControl("", Validators.required),
      ShortName: new FormControl("", Validators.required),
      base_unit: new FormControl(null),
      operator: new FormControl("", Validators.required),
      operator_value: new FormControl("", Validators.required),
    });
    this.editUnitForm = new FormGroup({
      name: new FormControl("", Validators.required),
      ShortName: new FormControl("", Validators.required),
      base_unit: new FormControl(null),
      operator: new FormControl("", Validators.required),
      operator_value: new FormControl("", Validators.required),
    });
  }


  changeOp(e: any) {
    this.createunit
      .get("operator")
      .setValue(e.target.value, { onlySelf: true });
  }


  changeBase(e: any) {
    this.createunit
      .get("operator_value")
      .setValue(e.target.value, { onlySelf: true });
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
    this._unit.allunit().subscribe((res) => {
      this.data = res.data.units;
      this.popData(this.data)
    });
  }

  popData(data){
    for(let i in data){
      this.Base.push(data[i].name)
    }
  }


  AddUnit() {
    this.submitted = true;
    if (this.createunit.valid) {
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
      this._unit.AddUnit(this.createunit.value).subscribe(observer);
    }
  }


  editUnit(id: number) {
    const observer = {
      next: (res) => {
        this.unitForEdit = res.data;
        console.log(this.unitForEdit);

        this.editUnitForm.get("name").setValue(this.unitForEdit.name);
        this.editUnitForm.get("ShortName").setValue(this.unitForEdit.ShortName);
        this.editUnitForm.get("base_unit").setValue(this.unitForEdit.base_unit);
        this.editUnitForm.get("operator").setValue(this.unitForEdit.operator);
        this.editUnitForm
          .get("operator_value")
          .setValue(this.unitForEdit.operator_value);
      },
      error: (error) => {
        console.log(error);
      },
    };

    this._unit.getUnitid(id).subscribe(observer);
  }


  updateUnit() {
    const observer = {
      next: (res) => {
        this.closeModel(this.contentModel);
        this.AllData();
      },
      error: (error) => {
        console.log(error);
      },
    };
    this._unit
      .updateUnit(this.unitForEdit?.id, this.editUnitForm.value)
      .subscribe(observer);
  }


  deleteUnit(id: any) {
    console.log(id);
    this._unit.deleteUnit(id).subscribe((res) => {
      this.AllData();
    });
  }


  search(event) {
    this._unit.params = this._unit.params.set("search", event);

    this.AllData();
  }
}
