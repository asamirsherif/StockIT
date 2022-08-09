import { SupplierReportComponent } from './../../Reports/supplier-report/supplier-report.component';
import { CustomerReportComponent } from './../../Reports/customer-report/customer-report.component';
import { PurchaseReportComponent } from './../../Reports/purchase-report/purchase-report.component';
import { SaleReportComponent } from './../../Reports/sale-report/sale-report.component';
import { ProfitAndLossComponent } from './../../Reports/profit-and-loss/profit-and-loss.component';
import { PurchasesReturnComponent } from './../../Reports/Payments/purchases-return/purchases-return.component';
import { SalesReturnComponent } from './../../Reports/Payments/sales-return/sales-return.component';
import { SalesComponent } from './../../Reports/Payments/sales/sales.component';
import { PurchasesComponent } from './../../Reports/Payments/purchases/purchases.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreCommonModule } from '@core/common.module';

import { AuthLoginV2Component } from 'app/main/pages/authentication/auth-login-v2/auth-login-v2.component';

import { SampleComponent } from 'app/main/sample/sample.component';
import { HomeComponent } from 'app/main/sample/home.component';

import { AuthGuard } from 'app/auth/helpers'
import { Role } from 'app/auth/models'
import { CreateproductComponent } from 'app/main/products/createproduct/createproduct.component';
import { PrintbarcodeComponent } from 'app/main/products/printbarcode/printbarcode.component';
import { ProductlistComponent } from 'app/main/products/productlist/productlist.component';
import { PrductquantityComponent } from 'app/main/Reports/prductquantity/prductquantity.component';
import { WarehouseReportComponent } from 'app/main/Reports/warehouse-report/warehouse-report.component';



// routing
const routes: Routes = [
  {
    path: 'login',
    component: AuthLoginV2Component,
    data: { animation: 'auth' }
  }
  // ,
  // {
  //   path: 'sample',
  //   component: SampleComponent,
  //   canActivate: [AuthGuard]
  // },{
  //   path: 'createproduct',
  //   component: CreateproductComponent,
  //   canActivate: [AuthGuard],
  //   data: { permission:'product_add'}
  // },{
  //   path: 'printbarcode',
  //   component: PrintbarcodeComponent,
  //   canActivate: [AuthGuard]
  // },{
  //   path: 'productlist',
  //   component: ProductlistComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'purchases',
  //   component: PurchasesComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'sales',
  //   component: SalesComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'sales return',
  //   component: SalesReturnComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'purchases return',
  //   component: PurchasesReturnComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'profit and loss',
  //   component: ProfitAndLossComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'product quantity alerts',
  //   component: PrductquantityComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'warehouse report',
  //   component: WarehouseReportComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'sale report',
  //   component: SaleReportComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'purchase report',
  //   component: PurchaseReportComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'customer report',
  //   component: CustomerReportComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'suplplier report',
  //   component: SupplierReportComponent,
  //   canActivate: [AuthGuard]
  // }
];

@NgModule({
  declarations: [AuthLoginV2Component],
  imports: [CommonModule, RouterModule.forChild(routes), NgbModule, FormsModule, ReactiveFormsModule, CoreCommonModule]
})
export class AuthenticationModule {}
