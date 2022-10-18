import { CoreMenu } from '@core/types'
import { checkPermission } from './permission-checker';


let user:any;
user = JSON.parse(localStorage.getItem("currentUser"));
let permissions = [];
if(user){ permissions = user.permissions }

export const menu: CoreMenu[] = [
  
  {
    id: 'Dashboard',
    title: 'Dashboard',
    translate: 'Dashboard',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  
  checkPermission(['products_view','products_add','products_delete','products_edit'],permissions) ? {
    id: 'Products',
    type: 'collapsible',
    title: 'Products',
    translate: 'Products',
    icon: 'book',
    children: [
      checkPermission(['products_add'],permissions) ?{
        id: 'Create Product',
        title: 'Create Product',
        translate: 'Create Product',
        type: 'item',
        url:'createproduct',
        icon: 'file',
      }:{},
      checkPermission(['products_view'],permissions) ?{
        id: 'Product List',
        title: 'Product List',
        translate: 'Product List',
        icon: 'file-text',
        type: 'item',
        url: 'productlist'
      }:{}
    //   ,
    //   checkPermission(['barcode_view'],permissions) ?{
    //     id: 'Print Barcode',
    //     title: 'Print Barcode',
    //     translate: 'Print Barcode',
    //     icon: 'code',
    //     type: 'item',
    //     url: 'printbarcode',
      
    //   }:{},
    ]
  } : {},
  checkPermission(['adjustment_add','adjustment_veiw','adjustment_edit','adjustment_delete'],permissions) ?{
    id: 'Adjustment',
    type: 'collapsible',
    title: 'Adjustment',
    translate: 'Adjustment',
    icon: 'map',
    children: [
      checkPermission(['adjustment_add'],permissions) ?
      {
        id: 'Create Adjustment',
        title: 'Create Adjustment',
        translate: 'Create Adjustment',
        type: 'item',
        url:'createadjustment',
        icon: 'file',
      }:{},
      checkPermission(['adjustment_veiw'],permissions) ?{
        id: 'Adjustment List',
        title: 'Adjustment List',
        translate: 'Adjustment List',
        icon: 'align-justify',
        type: 'item',
        url: 'listadjustment'
      }:{},
    ]
  }:{},
  
  // {
  //   id: 'Transfer',
  //   type: 'collapsible',
  //   title: 'Transfer',
  //   translate: 'Transfer',
  //   icon: 'arrow-left-circle',
  //   children: [
  //     {
  //       id: 'Create Transfer',
  //       title: 'Create Transfer',
  //       translate: 'Create Transfer',
  //       type: 'item',
  //       url:'createtransfer',
  //       icon: 'file',
  //     },
  //     {
  //       id: 'Transfer List',
  //       title: 'Transfer List',
  //       translate: 'Transfer List',
  //       icon: 'align-justify',
  //       type: 'item',
  //       url: 'transferlist'
  //     },
     
  //   ]
  // },

  
  checkPermission(['expense_add','expense_view'],permissions) ?{
    id: 'Expenses',
    type: 'collapsible',
    title: 'Expenses',
    translate: 'Expenses',
    icon: 'book',
    children: [
      checkPermission(['expense_add'],permissions) ?{
        id: 'Create Expenses',
        title: 'Create Expenses',
        translate: 'Create Expenses',
        type: 'item',
        url:'createexpenses',
        icon: 'file',
      }:{},
      checkPermission(['expense_view'],permissions) ?{
        id: 'Expenses List',
        title: 'Expenses List',
        translate: 'Expenses List',
        icon: 'align-justify',
        type: 'item',
        url: 'expenseslist'
      }:{},
      checkPermission(['category_expense_add','category_expense_veiw'],permissions) ?{
        id: 'Expenses Category',
        title: 'Expenses Category',
        translate: 'Expenses Category',
        icon: 'file-text',
        type: 'item',
        url: 'expensescategory',
      
      }:{},
    ]
  }:{},
  // {
  //   id: 'Quotations',
  //   type: 'collapsible',
  //   title: 'Quotations',
  //   translate: 'Quotations',
  //   icon: 'message-square',
  //   children: [
  //     {
  //       id: 'Create Quotations',
  //       title: 'Create Quotations',
  //       translate: 'Create Quotations',
  //       type: 'item',
  //       url:'createquotations',
  //       icon: 'file',
  //     },
  //     {
  //       id: 'Quotations List',
  //       title: 'Quotations List',
  //       translate: 'Quotations List',
  //       icon: 'align-justify',
  //       type: 'item',
  //       url: 'quotationslist'
  //     },
     
  //   ]
  // },

  checkPermission(['purchases_add','purchases_view'],permissions) ?{
    id: 'Purchases',
    type: 'collapsible',
    title: 'Purchases',
    translate: 'Purchases',
    icon: 'file-minus',
    children: [
      checkPermission(['purchases_add'],permissions) ?{
        id: 'Create Purchases',
        title: 'Create Purchases',
        translate: 'Create Purchases',
        type: 'item',
        url:'createpurchases',
        icon: 'file',
      }:{},
      checkPermission(['purchases_view'],permissions) ?{
        id: 'Purchases List',
        title: 'Purchases List',
        translate: 'Purchases List',
        icon: 'align-justify',
        type: 'item',
        url: 'purchaseslist'
      }:{},
     
    ]
  }:{},
  checkPermission(['sales_add','sales_view'],permissions) ?{
    id: 'Sales',
    type: 'collapsible',
    title: 'Sales',
    translate: 'Sales',
    icon: 'shopping-cart',
    children: [
      checkPermission(['sales_add'],permissions) ?{
        id: 'Create Sales',
        title: 'Create Sales',
        translate: 'Create Sales',
        type: 'item',
        url:'createsales',
        icon: 'file',
      }:{},
      checkPermission(['sales_view'],permissions) ?{
        id: 'Sales List',
        title: 'Sales List',
        translate: 'Sales List',
        icon: 'align-justify',
        type: 'item',
        url: 'saleslist'
      }:{},
     
    ]
  }:{},
//   checkPermission(['sales_return_add'],permissions) ?{
//     id: 'Sales Return',
//     type: 'collapsible',
//     title: 'Sales Return',
//     translate: 'Sales Return',
//     icon: 'arrow-right',
//     children: [
//       checkPermission(['sales_return_add','sale_return_view'],permissions) ?{
//         id: 'Create Return',
//         title: 'Create Return',
//         translate: 'Create Return',
//         type: 'item',
//         url:'createreturn',
//         icon: 'file',
//       }:{},
//       checkPermission(['sales_return_view'],permissions) ?{
//         id: 'Return List',
//         title: 'Return List',
//         translate: 'Return List',
//         icon: 'align-justify',
//         type: 'item',
//         url: 'returnlist'
//       }:{},
     
//     ]
//   }:{},
  
  // {
  //   id: 'Purchases Return',
  //   type: 'collapsible',
  //   title: 'Purchases Return',
  //   translate: 'Purchases Return',
  //   icon: 'arrow-left',
  //   children: [
  //     {
  //       id: 'Create Return',
  //       title: 'Create Return',
  //       translate: 'Create Return',
  //       type: 'item',
  //       url:'createreturns',
  //       icon: 'file',
  //     },
  //     {
  //       id: 'Return List',
  //       title: 'Return List',
  //       translate: 'Return List',
  //       icon: 'align-justify',
  //       type: 'item',
  //       url: 'returnslist'
  //     },
     
  //   ]
  // },

  checkPermission(['customer_view','supplier_view','user_view'],permissions) ?{
    id: 'People',
    type: 'collapsible',
    title: 'People',
    translate: 'People',
    icon: 'users',
    children: [
      checkPermission(['customers_view'],permissions) ?{
        id: 'Customer List',
        title: 'Customer List',
        translate: 'Customer List',
        type: 'item',
        url:'customerlist',
        icon: 'user',
      }:{},
      checkPermission(['supplier_view'],permissions) ?{
        id: 'Supplier List',
        title: 'Supplier List',
        translate: 'Supplier List',
        icon: 'user',
        type: 'item',
        url: 'supplierlist',
      }:{},
      checkPermission(['users_view'],permissions) ?{
        id: 'User List',
        title: 'User List',
        translate: 'User List',
        icon: 'user',
        type: 'item',
        url: 'userlist',
      }:{},
     
    ]
  }:{},
  checkPermission(["permissions_add","permissions_view","brand","warehouse","category","currency","unit","setting_system"],permissions)?{
    id: 'Settings',
    type: 'collapsible',
    title: 'Settings',
    translate: 'Settings',
    icon: 'settings',
    children: [
      checkPermission(["permissions_add"],permissions)? {
        id: 'System Settings',
        title: 'System Settings',
        translate: 'System Settings',
        type: 'item',
        url:'system-setting',
        icon: 'settings',
      }:{},
      checkPermission(["permissions_add","permissions_view"],permissions)?{
        id: 'Group Permission',
        title: 'Group Permission',
        translate: 'Group Permission',
        icon: 'key',
        type: 'item',
        url: 'group-permission'
      }:{},
      checkPermission(["warehouse"],permissions)?{
        id: 'Warehouse',
        title: 'Warehouse',
        translate: 'Warehouse',
        icon: 'home',
        type: 'item',
        url: 'warehouse'
      }:{},
      checkPermission(["category"],permissions)?{
        id: 'Category',
        title: 'Category',
        translate: 'Category',
        icon: 'file',
        type: 'item',
        url: 'category'
      }:{},
      checkPermission(["brand"],permissions)?{
        id: 'Brand',
        title: 'Brand',
        translate: 'Brand',
        icon: 'clipboard',
        type: 'item',
        url: 'brand'
      }:{},
      checkPermission(["currency"],permissions)?{
        id: 'Currency',
        title: 'Currency',
        translate: 'Currency',
        icon: 'dollar-sign',
        type: 'item',
        url: 'currency'
      }:{},
      checkPermission(["unit"],permissions)?{
        id: 'Unit',
        title: 'Unit',
        translate: 'Unit',
        icon: 'clipboard',
        type: 'item',
        url: 'unit'
      }:{},
      checkPermission(["show_record"],permissions)?{
        id: 'Backup',
        title: 'Backup',
        translate: 'Backup',
        icon: 'shopping-bag',
        type: 'item',
        url: 'backup'
      }:{},
     
    ]
  }:{},
  {
    id: 'Reports',
    type: 'collapsible',
    title: 'Reports',
    translate: 'Reports',
    icon: 'trending-up',
    children: [
        checkPermission(["Reports_profit"],permissions)?{
        id: 'Profit And Loss',
        title: 'Profit And Loss',
        translate: 'Profit And Loss',
        icon: 'eye',
        type: 'item',
        url: 'profit-and-loss'
      }:{},
      checkPermission(["Reports_quantity_alerts"],permissions)?{
        id: 'Product Quantity Alerts',
        title: 'Product Quantity Alerts',
        translate: 'Product Quantity Alerts',
        icon: 'credit-card',
        type: 'item',
        url: 'product-quantity-alerts'
      }:{},
      checkPermission(["Reports_Warehouse"],permissions)?{
        id: 'Warehouse Report',
        title: 'Warehouse Report',
        translate: 'Warehouse Report',
        icon: 'slash',
        type: 'item',
        url: 'warehouse-report'
      }:{},
      checkPermission(["Reports_sales"],permissions)?{
        id: 'Sale Report',
        title: 'Sale Report',
        translate: 'Sale Report',
        icon: 'trending-up',
        type: 'item',
        url: 'sale-report'
      }:{},
      checkPermission(["Reports_purcahse"],permissions)?{
        id: 'Purchase Report',
        title: 'Purchase Report',
        translate: 'Purchase Report',
        icon: 'bar-chart',
        type: 'item',
        url: 'purchase-report'
      }:{},
      checkPermission(["Reports_customers"],permissions)?{
        id: 'Customer Report',
        title: 'Customer Report',
        translate: 'Customer Report',
        icon: 'bar-chart',
        type: 'item',
        url: 'customer-report'
      }:{},
      checkPermission(["Reports_suppliers"],permissions)?{
        id: 'Supplier Report',
        title: 'Supplier Report',
        translate: 'Supplier Report',
        icon: 'slash',
        type: 'item',
        url: 'suplplier-report'
      }:{},
     
    ]
  },{
    id: 'Doc',
    title: 'Documentation',
    translate: 'Documentation',
    type: 'item',
    icon: 'file-text',
    url: 'https://stockit-api.smartveld.com/public/docs/',
    externalUrl: true,
    openInNewTab: true
  },
]
