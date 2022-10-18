import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast
import { NgForm } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';

import { coreConfig } from 'app/app-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthGuard, ErrorInterceptor, JwtInterceptor } from 'app/auth/helpers';

import { CreateproductComponent } from './main/products/createproduct/createproduct.component';
import { ProductlistComponent } from './main/products/productlist/productlist.component';
import { PrintbarcodeComponent } from './main/products/printbarcode/printbarcode.component';
import { CreateadjustmentComponent } from './main/Adjustment/createadjustment/createadjustment.component';
import { ListadjustmentComponent } from './main/Adjustment/listadjustment/listadjustment.component';
import { PurchasesComponent } from './main/Reports/Payments/purchases/purchases.component';
import { SalesComponent } from './main/Reports/Payments/sales/sales.component';
import { SalesReturnComponent } from './main/Reports/Payments/sales-return/sales-return.component';
import { PurchasesReturnComponent } from './main/Reports/Payments/purchases-return/purchases-return.component';
import { ProfitAndLossComponent } from './main/Reports/profit-and-loss/profit-and-loss.component';
import { PrductquantityComponent } from './main/Reports/prductquantity/prductquantity.component';
import { WarehouseReportComponent } from './main/Reports/warehouse-report/warehouse-report.component';
import { SaleReportComponent } from './main/Reports/sale-report/sale-report.component';
import { PurchaseReportComponent } from './main/Reports/purchase-report/purchase-report.component';
import { CustomerReportComponent } from './main/Reports/customer-report/customer-report.component';
import { SupplierReportComponent } from './main/Reports/supplier-report/supplier-report.component';
import { SystemsettingComponent } from './main/settings/systemsetting/systemsetting.component';
import { GrouppermissionComponent } from './main/settings/grouppermission/grouppermission.component';
import { WarehouseComponent } from './main/settings/warehouse/warehouse.component';
import { CategoryComponent } from './main/settings/category/category.component';
import { BrandComponent } from './main/settings/brand/brand.component';
import { CurrencyComponent } from './main/settings/currency/currency.component';
import { UnitComponent } from './main/settings/unit/unit.component';
import { BackupComponent } from './main/settings/backup/backup.component';
import { CreatetransferComponent } from './main/transfer/createtransfer/createtransfer.component';
import { TransferlistComponent } from './main/transfer/transferlist/transferlist.component';
import { CreateexpensesComponent } from './main/expenses/createexpenses/createexpenses.component';
import { ExpenseslistComponent } from './main/expenses/expenseslist/expenseslist.component';
import { ExpensecategoryComponent } from './main/expenses/expensecategory/expensecategory.component';
import { CreatequotationsComponent } from './main/quotations/createquotations/createquotations.component';
import { QuotationslistComponent } from './main/quotations/quotationslist/quotationslist.component';
import { CreatepurchasesComponent } from './main/Purchases/createpurchases/createpurchases.component';
import { PurchaseslistComponent } from './main/Purchases/purchaseslist/purchaseslist.component';
import { CreatesalesComponent } from './main/sales/createsales/createsales.component';
import { SaleslistComponent } from './main/sales/saleslist/saleslist.component';
import { CreatereturnComponent } from './main/salesReturn/createreturn/createreturn.component';
import { ReturnlistComponent } from './main/salesReturn/returnlist/returnlist.component';
import { CreatereturnsComponent } from './main/purchasesReturn/createreturns/createreturns.component';
import { ReturnslistComponent } from './main/purchasesReturn/returnslist/returnslist.component';
import { CustomerlistComponent } from './main/people/customerlist/customerlist.component';
import { SupplierlistComponent } from './main/people/supplierlist/supplierlist.component';
import { UserlistComponent } from './main/people/userlist/userlist.component'
import { ProfitAndLossModule } from './main/Reports/profit-and-loss/profit-and-loss.module';
import { CreatepermissionComponent } from './main/setting/permission/createpermission/createpermission.component';
import { ProductupdateComponent } from './main/products/productupdate/productupdate.component';
import { ProductdetatilsComponent } from './main/products/productdetatils/productdetatils.component';
import { AdjustupdateComponent } from './main/Adjustment/adjustupdate/adjustupdate.component';
import { ExpenseupdateComponent } from './main/expenses/expenseupdate/expenseupdate.component';
import { QuotationupdateComponent } from './main/quotations/quotationupdate/quotationupdate.component';
import { PurchasesupdateComponent } from './main/Purchases/purchasesupdate/purchasesupdate.component';
import { SalesupdateComponent } from './main/sales/salesupdate/salesupdate.component';
import { GrouppermissingupdateComponent } from './main/settings/grouppermissingupdate/grouppermissingupdate.component';
import { UpdatetransferComponent } from './main/transfer/updatetransfer/updatetransfer.component';
import { ProfileComponent } from './main/profile/profile.component';
import { environment } from 'environments/environment';


const appRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'docs',
    redirectTo: environment.apiUrl + '/docs',
    pathMatch: 'full'
  }, {
    path: 'createproduct',
    canActivate: [AuthGuard],
    data: { permission: 'products_add' },
    loadChildren: () => import('./main/products/createproduct/createproduct.module').then(m => m.CreateproductModule)
  }, {
    path: 'productlist',
    canActivate: [AuthGuard],
    data: { permission: 'products_view' },
    loadChildren: () => import('./main/products/productlist/productlist.module').then(m => m.CreateproductModule)
  }, {
    path: 'printbarcode',
    canActivate: [AuthGuard],
    data: { permission: 'barcode_view' },
    loadChildren: () => import('./main/products/printbarcode/printbarcode.module').then(m => m.CreateproductModule)
  }, {
    path: 'createadjustment',
    canActivate: [AuthGuard],
    data: { permission: 'adjustment_add' },
    loadChildren: () => import('./main/Adjustment/createadjustment/createadjustment.module').then(m => m.CreateadjustmentModule)
  }, {
    path: 'listadjustment',
    data: { permission: 'adjustment_veiw' },
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/Adjustment/listadjustment/listadjustment.module').then(m => m.ListadjustmentModule)
  }, {
    path: 'purchases',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/Reports/Payments/purchases/purchases.module').then(m => m.PurchasesModule)
  }, {
    path: 'sales',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/Reports/Payments/sales/sales.module').then(m => m.SalesModule)
  }, {
    path: 'sales-return',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/Reports/Payments/sales-return/sales-return.module').then(m => m.SalesReturnModule)
  }, {
    path: 'purchases-return',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/Reports/Payments/purchases-return/purchases-return.module').then(m => m.PurchasesReturnModule)
  }, {
    path: 'profit-and-loss',
    canActivate: [AuthGuard],
    data: { permission: 'Reports_profit' },
    loadChildren: () => import('./main/Reports/profit-and-loss/profit-and-loss.module').then(m => m.ProfitAndLossModule)
  }, {
    path: 'product-quantity-alerts',
    canActivate: [AuthGuard],
    data: { permission: 'Reports_quantity_alerts' },
    loadChildren: () => import('./main/Reports/prductquantity/productquantity.module').then(m => m.PrductquantityModule)
  }, {
    path: 'warehouse-report',
    canActivate: [AuthGuard],
    data: { permission: 'Reports_Warehouse' },
    loadChildren: () => import('./main/Reports/warehouse-report/warehouse.module').then(m => m.WarehouseReportModule)
  }, {
    path: 'sale-report',
    canActivate: [AuthGuard],
    data: { permission: 'Reports_sales' },
    loadChildren: () => import('./main/Reports/sale-report/sale-report.module').then(m => m.SaleReportModule)
  }, {
    path: 'purchase-report',
    canActivate: [AuthGuard],
    data: { permission: 'Reports_purchase' },
    loadChildren: () => import('./main/Reports/purchase-report/purchase-report.module').then(m => m.PurchaseReportModule)
  }, {
    path: 'customer-report',
    canActivate: [AuthGuard],
    data: { permission: 'Reports_customers' },
    loadChildren: () => import('./main/Reports/customer-report/customer-report.module').then(m => m.CustomerReportModule)
  }, {
    path: 'suplplier-report',
    canActivate: [AuthGuard],
    data: { permission: 'Reports_suppliers' },
    loadChildren: () => import('./main/Reports/supplier-report/supplier-report.module').then(m => m.SupplierReportModule)
  }, {
    path: 'system-setting',
    canActivate: [AuthGuard],
    data: { permission: 'setting_system' },
    loadChildren: () => import('./main/settings/systemsetting/systemsetting.module').then(m => m.SystemsettingModule)
  }, {
    path: 'group-permission',
    data: { permission: 'permissions_view' },
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/settings/grouppermission/grouppermission.module').then(m => m.GrouppermissionModule)
  }, {
    path: 'warehouse',
    canActivate: [AuthGuard],
    data: { permission: 'warehouse' },
    loadChildren: () => import('./main/settings/warehouse/warehouse.module').then(m => m.WarehouseReportModule)
  }, {
    path: 'category',
    canActivate: [AuthGuard],
    data: { permission: 'category' },
    loadChildren: () => import('./main/settings/category/category.module').then(m => m.CategoryModule)
  }, {
    path: 'brand',
    canActivate: [AuthGuard],
    data: { permission: 'brand' },
    loadChildren: () => import('./main/settings/brand/brand.module').then(m => m.BrandModule)
  }, {
    path: 'currency',
    canActivate: [AuthGuard],
    data: { permission: 'currency' },
    loadChildren: () => import('./main/settings/currency/currency.module').then(m => m.CurrencyModule)
  }, {
    path: 'unit',
    canActivate: [AuthGuard],
    data: { permission: 'unit' },
    loadChildren: () => import('./main/settings/unit/unit.module').then(m => m.UnitModule)
  }, {
    path: 'backup',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/settings/backup/backup.module').then(m => m.BackupModule)
  },
  {
    path: 'createtransfer',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/transfer/createtransfer/createtransfer.module').then(m => m.CreatetransferModule)
  },
  {
    path: 'transferlist',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/transfer/transferlist/transferlist.module').then(m => m.TransferlistModule)
  },
  {
    path: 'createexpenses',
    data: { permission: 'expense_add' },
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/expenses/createexpenses/createexpenses.module').then(m => m.CreateexpensesModule)

  },
  {
    path: 'expenseslist',
    data: { permission: 'expense_view' },
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/expenses/expenseslist/expenseslist.module').then(m => m.ExpenseslistModule)
  },
  {
    path: 'expensescategory',
    data: { permission: 'category_expense_view' },
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/expenses/expensecategory/expensescategory.module').then(m => m.ExpensecategoryModule)
  },
  {
    path: 'createquotations',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/quotations/createquotations/createquotations.module').then(m => m.CreatequotationsModule)
  },
  {
    path: 'quotationslist',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/quotations/quotationslist/quotationslist.module').then(m => m.QuotationslistModule)
  },
  {
    path: 'createpurchases',
    data: { permission: 'purchases_add' },
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/Purchases/createpurchases/createpurchases.module').then(m => m.CreatepurchasesModule)
  },
  {
    path: 'purchaseslist',
    data: { permission: 'purchases_view' },
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/Purchases/purchaseslist/purchaseslist.module').then(m => m.PurchaseslistModule)
  },
  {
    path: 'createsales',
    data: { permission: 'sales_add' },
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/sales/createsales/createsales.module').then(m => m.CreatesalesModule)
  },
  {
    path: 'saleslist',
    data: { permission: 'sales_view' },
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/sales/saleslist/saleslist.module').then(m => m.SaleslistModule)
  },
  {
    path: 'createreturn',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/salesReturn/createreturn/createreturn.module').then(m => m.CreatereturnModule)
  },
  {
    path: 'returnlist',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/salesReturn/returnlist/returnlist.module').then(m => m.ReturnlistModule)
  },
  {
    path: 'createreturns',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/purchasesReturn/createreturns/createreturns.module').then(m => m.CreatereturnsModule)
  },
  {
    path: 'returnslist',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/purchasesReturn/returnslist/returnslist.module').then(m => m.ReturnslistModule)
  },
  {
    path: 'customerlist',
    data: { permission: 'customers_view' },
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/people/customerlist/customerlist.module').then(m => m.CustomerlistModule)
  },
  {
    path: 'supplierlist',
    data: { permission: 'supplier_view' },
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/people/supplierlist/supplierlist.module').then(m => m.SupplierlistModule)
  },
  {
    path: 'userlist',
    data: { permission: 'users_view' },
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/people/userlist/userlist.module').then(m => m.UserlistModule)
  },
  {
    path: 'adjustupdate/:id',
    canActivate: [AuthGuard],
    data: { permission: 'adjustment_edit' },
    loadChildren: () => import('./main/Adjustment/adjustupdate/adjustupdate.module').then(m => m.AdjustupdateModule)
  }, {
    path: 'expenseupdate/:id',
    canActivate: [AuthGuard],
    data: { permission: 'expense_edit' },
    loadChildren: () => import('./main/expenses/expenseupdate/expensesupdate.module').then(m => m.ExpenseupdateModule)
  }, {
    path: 'createpermission',
    canActivate: [AuthGuard],
    data: { permission: 'permissions_add' },
    loadChildren: () => import('./main/setting/permission/createpermission/createpermission.module').then(m => m.CreatepermissionModule)
  }, {
    path: 'productdetails/:id',
    canActivate: [AuthGuard],
    data: { permission: 'products_edit' },
    loadChildren: () => import('./main/products/productdetatils/productdetails.module').then(m => m.ProductdetatilsModule)
  }, {
    path: 'productupdate/:id',
    canActivate: [AuthGuard],
    data: { permission: 'products_edit' },
    loadChildren: () => import('./main/products/productupdate/productupdate.module').then(m => m.ProductupdateComponentModule)
  }, {
    path: 'purchasesupdate/:id',
    canActivate: [AuthGuard],
    data: { permission: 'purchases_edit' },
    loadChildren: () => import('./main/Purchases/purchasesupdate/purchasesupdate.module').then(m => m.PurchasesupdateModule)
  }, {
    path: 'quotationupdate',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/quotations/quotationupdate/quotationupdate.module').then(m => m.QuotationupdateModule)
  }, {
    path: 'salesupdate/:id',
    canActivate: [AuthGuard],
    data: { permission: 'sales_edit' },
    loadChildren: () => import('./main/sales/salesupdate/salesupdate.module').then(m => m.SalesupdateModule)
  },
  {
    path: 'permissionupdate/:id',
    data: { permission: 'permissions_edit' },
    loadChildren: () => import('./main/settings/grouppermissingupdate/grouppermissionupdate.module').then(m => m.GrouppermissingupdateModule)
  }, {
    path: 'ternsupdate',
    loadChildren: () => import('./main/transfer/updatetransfer/updatetransfer.module').then(m => m.UpdatetransferModule)
  },{
    path: 'profile',
    loadChildren: () => import('./main/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error' //Error 404 - Page not found
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy'
    }),
    TranslateModule.forRoot(),

    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,

    // App modules
    LayoutModule,
    SampleModule
  ],

  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class AppModule { }
