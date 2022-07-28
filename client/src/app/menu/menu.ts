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
        url:'createproduct',
        icon: 'file',
      },
      {
        id: 'Adjustment List',
        title: 'Adjustment List',
        translate: 'Adjustment List',
        icon: 'align-justify',
        type: 'item',
        url: '#'
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
        url:'createproduct',
        icon: 'file',
      },
      {
        id: 'Transfer List',
        title: 'Transfer List',
        translate: 'Transfer List',
        icon: 'align-justify',
        type: 'item',
        url: '#'
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
        url: '#'
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
        url:'createquotation',
        icon: 'file',
      },
      {
        id: 'Quotations List',
        title: 'Quotations List',
        translate: 'Quotations List',
        icon: 'align-justify',
        type: 'item',
        url: '#'
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
        url:'createquotation',
        icon: 'file',
      },
      {
        id: 'Purchases List',
        title: 'Purchases List',
        translate: 'Purchases List',
        icon: 'align-justify',
        type: 'item',
        url: '#'
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
        url:'createquotation',
        icon: 'file',
      },
      {
        id: 'Sales List',
        title: 'Sales List',
        translate: 'Sales List',
        icon: 'align-justify',
        type: 'item',
        url: '#'
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
        url:'createquotation',
        icon: 'file',
      },
      {
        id: 'Return List',
        title: 'Return List',
        translate: 'Return List',
        icon: 'align-justify',
        type: 'item',
        url: '#'
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
        url:'createquotation',
        icon: 'file',
      },
      {
        id: 'Return List',
        title: 'Return List',
        translate: 'Return List',
        icon: 'align-justify',
        type: 'item',
        url: '#'
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
        id: 'Create List',
        title: 'Create List',
        translate: 'Create List',
        type: 'item',
        url:'createquotation',
        icon: 'user',
      },
      {
        id: 'Supplier List',
        title: 'Supplier List',
        translate: 'Supplier List',
        icon: 'user',
        type: 'item',
        url: '#',
      },{
        id: 'User List',
        title: 'User List',
        translate: 'User List',
        icon: 'user',
        type: 'item',
        url: '#',
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
        url:'createquotation',
        icon: 'settings',
      },
      {
        id: 'Group Permission',
        title: 'Group Permission',
        translate: 'Group Permission',
        icon: 'key',
        type: 'item',
        url: '#'
      },{
        id: 'Warehouse',
        title: 'Warehouse',
        translate: 'Warehouse',
        icon: 'home',
        type: 'item',
        url: '#'
      },{
        id: 'Category',
        title: 'Category',
        translate: 'Category',
        icon: 'file',
        type: 'item',
        url: '#'
      },{
        id: 'Brand',
        title: 'Brand',
        translate: 'Brand',
        icon: 'clipboard',
        type: 'item',
        url: '#'
      },{
        id: 'Currency',
        title: 'Currency',
        translate: 'Currency',
        icon: 'dollar-sign',
        type: 'item',
        url: '#'
      },{
        id: 'Unit',
        title: 'Unit',
        translate: 'Unit',
        icon: 'clipboard',
        type: 'item',
        url: '#'
      },{
        id: 'Backup',
        title: 'Backup',
        translate: 'Backup',
        icon: 'shopping-bag',
        type: 'item',
        url: '#'
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
        type: 'item',
        url:'createquotation',
        icon: 'credit-card',
      },
      {
        id: 'Profit And Loss',
        title: 'Profit And Loss',
        translate: 'Profit And Loss',
        icon: 'eye',
        type: 'item',
        url: '#'
      },{
        id: 'Product Quantity Alerts',
        title: 'Product Quantity Alerts',
        translate: 'Product Quantity Alerts',
        icon: 'credit-card',
        type: 'item',
        url: '#'
      },{
        id: 'Warehouse Report',
        title: 'Warehouse Report',
        translate: 'Warehouse Report',
        icon: 'slash',
        type: 'item',
        url: '#'
      },{
        id: 'Sale Report',
        title: 'Sale Report',
        translate: 'Sale Report',
        icon: 'trending-up',
        type: 'item',
        url: '#'
      },{
        id: 'Purchase Report',
        title: 'Purchase Report',
        translate: 'Purchase Report',
        icon: 'bar-chart',
        type: 'item',
        url: '#'
      },{
        id: 'Customer Report',
        title: 'Customer Report',
        translate: 'Customer Report',
        icon: 'bar-chart',
        type: 'item',
        url: '#'
      },{
        id: 'Suplplier Report',
        title: 'Suplplier Report',
        translate: 'Suplplier Report',
        icon: 'slash',
        type: 'item',
        url: '#'
      },
     
    ]
  },{
    id: 'Doc',
    title: 'Doc',
    translate: 'Doc',
    type: 'item',
    icon: 'file-text',
    url: '#'
  },
]
