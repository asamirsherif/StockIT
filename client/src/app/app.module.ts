import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';

import { coreConfig } from 'app/app-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http'
import {  ErrorInterceptor, JwtInterceptor } from 'app/auth/helpers';
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

const appRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },{
    path: 'createproduct',
    loadChildren: () => import('./main/products/createproduct/createproduct.module').then(m => m.CreateproductModule)
  },{
    path: 'productlist',
    loadChildren: () => import('./main/products/productlist/productlist.module').then(m => m.CreateproductModule)
  },{
    path: 'printbarcode',
    loadChildren: () => import('./main/products/printbarcode/printbarcode.module').then(m => m.CreateproductModule)
  },{
    path: 'createadjustment',
    loadChildren: () => import('./main/Adjustment/createadjustment/createadjustment.module').then(m => m.CreateadjustmentModule)
  },{
    path: 'listadjustment',
    loadChildren: () => import('./main/Adjustment/listadjustment/listadjustment.module').then(m => m.ListadjustmentModule)
  },{
    path: 'purchases',
    loadChildren: () => import('./main/Reports/Payments/purchases/purchases.module').then(m => m.PurchasesModule )
  },{
    path: 'sales',
    loadChildren: () => import('./main/Reports/Payments/sales/sales.module').then(m => m.SalesModule)
  },{
    path: 'sales return',
    loadChildren: () => import('./main/Reports/Payments/sales-return/sales-return.module').then(m => m.SalesReturnModule)
  },{
    path: 'purchases return',
    loadChildren: () => import('./main/Reports/Payments/purchases-return/purchases-return.module').then(m => m.PurchasesReturnModule)
  },{
    path: 'profit and loss',
    loadChildren: () => import('./main/Reports/profit-and-loss/profit-and-loss.module').then(m => m.ProfitAndLossModule)
  },{
    path: 'product quantity alerts',
    loadChildren: () => import('./main/Reports/prductquantity/productquantity.module').then(m => m.PrductquantityModule)
  },{
    path: 'warehouse report',
    loadChildren: () => import('./main/Reports/warehouse-report/warehouse.module').then(m => m.WarehouseReportModule)
  },{
    path: 'sale report',
    loadChildren: () => import('./main/Reports/sale-report/sale-report.module').then(m => m.SaleReportModule)
  },{
    path: 'purchase report',
    loadChildren: () => import('./main/Reports/purchase-report/purchase-report.module').then(m => m.PurchaseReportModule)
  },{
    path: 'customer report',
    loadChildren: () => import('./main/Reports/customer-report/customer-report.module').then(m => m.CustomerReportModule)
  },{
    path: 'suplplier report',
    loadChildren: () => import('./main/Reports/supplier-report/supplier-report.module').then(m => m.SupplierReportModule)
  },{
    path: 'system setting',
    loadChildren: () => import('./main/settings/systemsetting/systemsetting.module').then(m => m.SystemsettingModule)
  },{
    path: 'group permission',
    loadChildren: () => import('./main/settings/grouppermission/grouppermission.module').then(m => m.GrouppermissionModule)
  },{
    path: 'warehouse',
    loadChildren: () => import('./main/settings/warehouse/warehouse.module').then(m => m.WarehouseReportModule)
  },{
    path: 'category',
    loadChildren: () => import('./main/settings/category/category.module').then(m => m.CategoryModule)
  },{
    path: 'brand',
    loadChildren: () => import('./main/settings/brand/brand.module').then(m => m.BrandModule)
  },{
    path: 'currency',
    loadChildren: () => import('./main/settings/currency/currency.module').then(m => m.CurrencyModule)
  },{
    path: 'unit',
    loadChildren: () => import('./main/settings/unit/unit.module').then(m => m.UnitModule)
  },{
    path: 'backup',
    loadChildren: () => import('./main/settings/backup/backup.module').then(m => m.BackupModule)
  },
  {
    path: 'createtransfer',
    loadChildren: () => import('./main/transfer/createtransfer/createtransfer.module').then(m => m.CreatetransferModule)
  },
  {
    path: 'transferlist',
    loadChildren: () => import('./main/transfer/transferlist/transferlist.module').then(m => m.TransferlistModule)
  },
  {
    path: 'createexpenses',
    loadChildren: () => import('./main/expenses/createexpenses/createexpenses.module').then(m => m.CreateexpensesModule )
      
  },
  {
    path: 'expenseslist',
    loadChildren: () => import('./main/expenses/expenseslist/expenseslist.module').then(m => m.ExpenseslistModule)
  },
  {
    path: 'expensescategory',
    loadChildren: () => import('./main/expenses/expensecategory/expensescategory.module').then(m => m.ExpensecategoryModule)
  },
  {
    path: 'createquotations',
    loadChildren: () => import('./main/quotations/createquotations/createquotations.module').then(m => m.CreatequotationsModule)
  },
  {
    path: 'quotationslist',
    loadChildren: () => import('./main/quotations/quotationslist/quotationslist.module').then(m => m.QuotationslistModule)
  },
  {
    path: 'createpurchases',
    loadChildren: () => import('./main/Purchases/createpurchases/createpurchases.module').then(m => m.CreatepurchasesModule)
  },
  {
    path: 'purchaseslist',
    loadChildren: () => import('./main/Purchases/purchaseslist/purchaseslist.module').then(m => m.PurchaseslistModule)
  },
  {
    path: 'createsales',
    loadChildren: () => import('./main/sales/createsales/createsales.module').then(m => m.CreatesalesModule)
  },
  {
    path: 'saleslist',
    loadChildren: () => import('./main/sales/saleslist/saleslist.module').then(m => m.SaleslistModule)
  },
  {
    path: 'createreturn',
    loadChildren: () => import('./main/salesReturn/createreturn/createreturn.module').then(m => m.CreatereturnModule)
  },
  {
    path: 'returnlist',
    loadChildren: () => import('./main/salesReturn/returnlist/returnlist.module').then(m => m.ReturnlistModule)
  },
  {
    path: 'createreturns',
    loadChildren: () => import('./main/purchasesReturn/createreturns/createreturns.module').then(m => m.CreatereturnsModule)
  },
  {
    path: 'returnslist',
    loadChildren: () => import('./main/purchasesReturn/returnslist/returnslist.module').then(m => m.ReturnslistModule)
  },
  {
    path: 'customerlist',
    loadChildren: () => import('./main/people/customerlist/customerlist.module').then(m => m.CustomerlistModule)
  },
  {
    path: 'supplierlist',
    loadChildren: () => import('./main/people/supplierlist/supplierlist.module').then(m => m.SupplierlistModule)
  },
  {
    path: 'userlist',
    loadChildren: () => import('./main/people/userlist/userlist.module').then(m => m.UserlistModule)
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
    BrowserAnimationsModule,
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
export class AppModule {}
