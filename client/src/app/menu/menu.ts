import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    translate: 'MENU.HOME',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  {
    id: 'sample',
    title: 'Sample',
    translate: 'MENU.SAMPLE',
    type: 'item',
    icon: 'file',
    url: 'sample'
  },
  {
    id: 'Products',
    type: 'collapsible',
    title: 'Products',
    translate: 'Products',
    icon: 'book',
    children: [
      {
        id: 'Create Product',
        title: 'Create Product',
        translate: 'Create Product',
        type: 'item',
        url:'createproduct',
        icon: 'file',
      },
      {
        id: 'Product List',
        title: 'Product List',
        translate: 'Product List',
        icon: 'file-text',
        type: 'item',
        url: 'productlist'
      },
      {
        id: 'Print Barcode',
        title: 'Print Barcode',
        translate: 'Print Barcode',
        icon: 'code',
        type: 'item',
        url: 'printbarcode',
      
      },
    ]
  },
  {
    id: 'Adjustment',
    type: 'collapsible',
    title: 'Adjustment',
    translate: 'Adjustment',
    icon: 'map',
    children: [
      {
        id: 'Create Adjustment',
        title: 'Create Adjustment',
        translate: 'Create Adjustment',
        type: 'item',
        url:'createadjustment',
        icon: 'file',
      },
      {
        id: 'Adjustment List',
        title: 'Adjustment List',
        translate: 'Adjustment List',
        icon: 'align-justify',
        type: 'item',
        url: 'listadjustment'
      },
     
    ]
  },{
    id: 'Transfer',
    type: 'collapsible',
    title: 'Transfer',
    translate: 'Transfer',
    icon: 'arrow-left-circle',
    children: [
      {
        id: 'Create Transfer',
        title: 'Create Transfer',
        translate: 'Create Transfer',
        type: 'item',
        url:'createtransfer',
        icon: 'file',
      },
      {
        id: 'Transfer List',
        title: 'Transfer List',
        translate: 'Transfer List',
        icon: 'align-justify',
        type: 'item',
        url: 'transferlist'
      },
     
    ]
  },
  {
    id: 'Expenses',
    type: 'collapsible',
    title: 'Expenses',
    translate: 'Expenses',
    icon: 'book',
    children: [
      {
        id: 'Create Expenses',
        title: 'Create Expenses',
        translate: 'Create Expenses',
        type: 'item',
        url:'createexpenses',
        icon: 'file',
      },
      {
        id: 'Expenses List',
        title: 'Expenses List',
        translate: 'Expenses List',
        icon: 'align-justify',
        type: 'item',
        url: 'expenseslist'
      },
      {
        id: 'Expenses Category',
        title: 'Expenses Category',
        translate: 'Expenses Category',
        icon: 'file-text',
        type: 'item',
        url: 'expensescategory',
      
      },
    ]
  },{
    id: 'Quotations',
    type: 'collapsible',
    title: 'Quotations',
    translate: 'Quotations',
    icon: 'message-square',
    children: [
      {
        id: 'Create Quotations',
        title: 'Create Quotations',
        translate: 'Create Quotations',
        type: 'item',
        url:'createquotations',
        icon: 'file',
      },
      {
        id: 'Quotations List',
        title: 'Quotations List',
        translate: 'Quotations List',
        icon: 'align-justify',
        type: 'item',
        url: 'quotationslist'
      },
     
    ]
  },{
    id: 'Purchases',
    type: 'collapsible',
    title: 'Purchases',
    translate: 'Purchases',
    icon: 'file-minus',
    children: [
      {
        id: 'Create Purchases',
        title: 'Create Purchases',
        translate: 'Create Purchases',
        type: 'item',
        url:'createpurchases',
        icon: 'file',
      },
      {
        id: 'Purchases List',
        title: 'Purchases List',
        translate: 'Purchases List',
        icon: 'align-justify',
        type: 'item',
        url: 'purchaseslist'
      },
     
    ]
  },{
    id: 'Sales',
    type: 'collapsible',
    title: 'Sales',
    translate: 'Sales',
    icon: 'shopping-cart',
    children: [
      {
        id: 'Create Sales',
        title: 'Create Sales',
        translate: 'Create Sales',
        type: 'item',
        url:'createsales',
        icon: 'file',
      },
      {
        id: 'Sales List',
        title: 'Sales List',
        translate: 'Sales List',
        icon: 'align-justify',
        type: 'item',
        url: 'saleslist'
      },
     
    ]
  },{
    id: 'Sales Return',
    type: 'collapsible',
    title: 'Sales Return',
    translate: 'Sales Return',
    icon: 'arrow-right',
    children: [
      {
        id: 'Create Return',
        title: 'Create Return',
        translate: 'Create Return',
        type: 'item',
        url:'createreturn',
        icon: 'file',
      },
      {
        id: 'Return List',
        title: 'Return List',
        translate: 'Return List',
        icon: 'align-justify',
        type: 'item',
        url: 'returnlist'
      },
     
    ]
  },{
    id: 'Purchases Return',
    type: 'collapsible',
    title: 'Purchases Return',
    translate: 'Purchases Return',
    icon: 'arrow-left',
    children: [
      {
        id: 'Create Return',
        title: 'Create Return',
        translate: 'Create Return',
        type: 'item',
        url:'createreturns',
        icon: 'file',
      },
      {
        id: 'Return List',
        title: 'Return List',
        translate: 'Return List',
        icon: 'align-justify',
        type: 'item',
        url: 'returnslist'
      },
     
    ]
  },{
    id: 'People',
    type: 'collapsible',
    title: 'People',
    translate: 'People',
    icon: 'users',
    children: [
      {
        id: 'Customer List',
        title: 'Customer List',
        translate: 'Customer List',
        type: 'item',
        url:'customerlist',
        icon: 'user',
      },
      {
        id: 'Supplier List',
        title: 'Supplier List',
        translate: 'Supplier List',
        icon: 'user',
        type: 'item',
        url: 'supplierlist',
      },{
        id: 'User List',
        title: 'User List',
        translate: 'User List',
        icon: 'user',
        type: 'item',
        url: 'userlist',
      },
     
    ]
  },{
    id: 'Settings',
    type: 'collapsible',
    title: 'Settings',
    translate: 'Settings',
    icon: 'settings',
    children: [
      {
        id: 'System Settings',
        title: 'System Settings',
        translate: 'System Settings',
        type: 'item',
        url:'system setting',
        icon: 'settings',
      },
      {
        id: 'Group Permission',
        title: 'Group Permission',
        translate: 'Group Permission',
        icon: 'key',
        type: 'item',
        url: 'group permission'
      },{
        id: 'Warehouse',
        title: 'Warehouse',
        translate: 'Warehouse',
        icon: 'home',
        type: 'item',
        url: 'warehouse'
      },{
        id: 'Category',
        title: 'Category',
        translate: 'Category',
        icon: 'file',
        type: 'item',
        url: 'category'
      },{
        id: 'Brand',
        title: 'Brand',
        translate: 'Brand',
        icon: 'clipboard',
        type: 'item',
        url: 'brand'
      },{
        id: 'Currency',
        title: 'Currency',
        translate: 'Currency',
        icon: 'dollar-sign',
        type: 'item',
        url: 'currency'
      },{
        id: 'Unit',
        title: 'Unit',
        translate: 'Unit',
        icon: 'clipboard',
        type: 'item',
        url: 'unit'
      },{
        id: 'Backup',
        title: 'Backup',
        translate: 'Backup',
        icon: 'shopping-bag',
        type: 'item',
        url: 'backup'
      },
     
    ]
  },{
    id: 'Reports',
    type: 'collapsible',
    title: 'Reports',
    translate: 'Reports',
    icon: 'trending-up',
    children: [
      {
        id: 'Payments',
        title: 'Payments',
        translate: 'Payments',
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'Purchases',
            title: 'Purchases',
            translate: 'Purchases',
            type: 'item',
            url:'purchases',
            icon: 'credit-card',
          },
          {
            id: 'Sales',
            title: 'Sales',
            translate: 'Sales',
            icon: 'credit-card',
            type: 'item',
            url: 'sales'
          },{
            id: 'Sales Return',
            title: 'Sales Return',
            translate: 'Sales Return',
            icon: 'credit-card',
            type: 'item',
            url: 'sales return'
          },{
            id: 'Purchases Return',
            title: 'Purchases Return',
            translate: 'Purchases Return',
            icon: 'credit-card',
            type: 'item',
            url: 'purchases return'
          }
        ]
      },
      {
        id: 'Profit And Loss',
        title: 'Profit And Loss',
        translate: 'Profit And Loss',
        icon: 'eye',
        type: 'item',
        url: 'profit and loss'
      },{
        id: 'Product Quantity Alerts',
        title: 'Product Quantity Alerts',
        translate: 'Product Quantity Alerts',
        icon: 'credit-card',
        type: 'item',
        url: 'product quantity alerts'
      },{
        id: 'Warehouse Report',
        title: 'Warehouse Report',
        translate: 'Warehouse Report',
        icon: 'slash',
        type: 'item',
        url: 'warehouse report'
      },{
        id: 'Sale Report',
        title: 'Sale Report',
        translate: 'Sale Report',
        icon: 'trending-up',
        type: 'item',
        url: 'sale report'
      },{
        id: 'Purchase Report',
        title: 'Purchase Report',
        translate: 'Purchase Report',
        icon: 'bar-chart',
        type: 'item',
        url: 'purchase report'
      },{
        id: 'Customer Report',
        title: 'Customer Report',
        translate: 'Customer Report',
        icon: 'bar-chart',
        type: 'item',
        url: 'customer report'
      },{
        id: 'Suplplier Report',
        title: 'Suplplier Report',
        translate: 'Suplplier Report',
        icon: 'slash',
        type: 'item',
        url: 'suplplier report'
      },
     
    ]
  },{
    id: 'Doc',
    title: 'Doc',
    translate: 'Doc',
    type: 'item',
    icon: 'file-text',
    url: 'doc'
  },
]
