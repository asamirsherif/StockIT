import { Warehous } from 'app/interfaces/warehous';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Irole } from 'app/interfaces/irole';
import { GrouppermissionservService } from 'app/auth/service/permission/grouppermissionserv.service';

@Component({
  selector: 'app-createpermission',
  templateUrl: './createpermission.component.html',
  styleUrls: ['./createpermission.component.scss']
})
export class CreatepermissionComponent implements OnInit {
  submitted = false;

  role:Irole[];
  errors: any = {};
  createRoleForm: FormGroup;
  constructor(public _router: Router,
    public roleser:GrouppermissionservService,private _toastr: ToastrService) { 
      this.createRoleForm=new FormGroup({
        name:new FormControl('',Validators.required),
        description:new FormControl('',Validators.required),
        users_add:new FormControl(null),users_view:new FormControl(null),users_edit:new FormControl(null),users_delete:new FormControl(null),
        record_view:new FormControl(null),permissions_add:new FormControl(null),permissions_view:new FormControl(null),
        permissions_edit:new FormControl(null),permissions_delete:new FormControl(null),brand:new FormControl(null),warehouse:new FormControl(null),
        category:new FormControl(null),currency:new FormControl(null),unit:new FormControl(null),setting_system:new FormControl(null),
        products_add:new FormControl(null),products_view:new FormControl(null),products_edit:new FormControl(null),products_delete:new FormControl(null),
        barcode_view:new FormControl(null),expense_add:new FormControl(null),expense_view:new FormControl(null),expense_edit:new FormControl(null),
        expense_delete:new FormControl(null),category_expense_add:new FormControl(null),category_expense_view:new FormControl(null),
        category_expense_edit:new FormControl(null),category_expense_delete:new FormControl(null),transfer_add:new FormControl(null),
        transfer_view:new FormControl(null),transfer_edit:new FormControl(null),transfer_delete:new FormControl(null),adjustment_add:new FormControl(null),
        adjustment_veiw:new FormControl(null),adjustment_edit:new FormControl(null),adjustment_delete:new FormControl(null),
        sales_add:new FormControl(null),sales_view:new FormControl(null),sales_edit:new FormControl(null),sales_delete:new FormControl(null),
        sales_return_add:new FormControl(null),sales_return_view:new FormControl(null),sales_return_edit:new FormControl(null),
        sales_return_delete:new FormControl(null),purchases_add:new FormControl(null),purchases_view:new FormControl(null),purchases_edit:new FormControl(null),
        purchases_delete:new FormControl(null),quotations_add:new FormControl(null),quotations_view:new FormControl(null),quotations_edit:new FormControl(null),
        quotations_delete:new FormControl(null),purchases_return_add:new FormControl(null),purchases_return_view:new FormControl(null),
        purchases_return_edit:new FormControl(null),purchases_return_delete:new FormControl(null),customers_add:new FormControl(null),
        customers_view:new FormControl(null),customers_edit:new FormControl(null),customers_delete:new FormControl(null),supplier_add:new FormControl(null),
        supplier_view:new FormControl(null),supplier_edit:new FormControl(null),supplier_delete:new FormControl(null),
        payment_purchases_add:new FormControl(null),payment_purchases_view:new FormControl(null),payment_purchases_edit:new FormControl(null),
        payment_purchases_delete:new FormControl(null),payment_returns_add:new FormControl(null),payment_returns_view:new FormControl(null),
        payment_returns_edit:new FormControl(null),payment_returns_delete:new FormControl(null),Reports_quantity_alerts:new FormControl(null),
        Reports_profit:new FormControl(null),Reports_suppliers:new FormControl(null),Reports_customers:new FormControl(null),
        Reports_purchase:new FormControl(null),Reports_sales:new FormControl(null),Reports_Warehouse:new FormControl(null),Reports_payments_purchase_Return:new FormControl(null),
        Reports_payments_Sale_Returns:new FormControl(null),Reports_payments_Purchases:new FormControl(null),Reports_payments_Sales:new FormControl(null),
        product_import:new FormControl(null),customers_import:new FormControl(null),suppliers_import:new FormControl(null)
      })
    }

  ngOnInit(): void {
  }
  AddRole(){
    this.submitted=true;
    if(this.createRoleForm.valid){
      const observer = {
        next: (res) => {
          this._toastr.success('New Role permission has been added');
          console.log(res);
          this._router.navigate(['group-permission'])

        },
        error: (error: HttpErrorResponse) => {
          this._toastr.error('Make sure for your data!');
          this.errors = error.error.errors;
        },
      }
      const formdata=this.createRoleForm.value;
      let permissionArray:Array<string>=[];
      Object.keys(this.createRoleForm.controls).forEach(key=>{
        console.log(this.createRoleForm.get(key).value)
        if(this.createRoleForm.get(key).value === true){
           permissionArray.push(key)
        }
      })
      let data={
        role:{
          name:formdata.name,
          description:formdata.description
        },
        permissions:permissionArray
      }
      console.log(data);
      this.roleser.AddRole(data).subscribe(observer)
      console.log(data);
    }
  }
}
