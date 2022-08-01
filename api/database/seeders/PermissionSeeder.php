<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSeeder extends Seeder
{	

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {	
		// User Permissions
		$user = ['users_add','users_view','users_edit','users_delete','record_view'];

		// Roles & Permissions
		$roles = ['permissions_add','permissions_view','permissions_edit','permissions_delete'];

		// Settings ( Brands - warehouse - category - currency - unit - settings)
		$brand = ['brand','warehouse','category','currency','unit','setting_system'];

		// Products
		$product = ['products_add','products_view','products_edit','products_delete','barcode_view'];

		// Expense
		$expense = ['expense_add','expense_view','expense_edit','expense_delete'];

		// Transfer 
		$transfer = ['transfer_add','transfer_view','transfer_edit','transfer_delete'];

		// Adjustment
		$adjustment = ['adjustment_add','adjustment_veiw','adjustment_edit','adjustment_delete'];

		// Sales
		$sales = ['sales_add','sales_view','sales_edit','sales_delete'];

		// Sales Returns
		$sales_return = ['sales_return_add','sales_return_view','sales_return_edit','sales_return_delete'];

		// Purchases
		$purchases = ['purchases_add','purchases_view','purchases_edit','purchases_delete'];

		// Quotation
		$quotation = ['quotations_add','quotations_view','quotations_edit','quotations_delete'];

		// Purchase Returns
		$purchases_return = ['purchases_return_add','purchases_return_view','purchases_return_edit','purchases_return_delete'];

		// Customers (Client)
		$customers = ['customers_add','customers_view','customers_edit','customers_delete'];

		// Supplier (Provider)
		$supplier = ['supplier_add','supplier_view','supplier_edit','supplier_delete'];

		// Purchase Payments
		$purchases_payment = ['payment_purchases_add','payment_purchases_view','payment_purchases_edit','payment_purchases_delete'];

		// Return Payments
		$return_payment = ['payment_returns_add','payment_returns_view','payment_returns_edit','payment_returns_delete'];


		// Reports 
		$reports = ['Reports_quantity_alerts','Reports_profit','Reports_suppliers','Reports_customers',
						'Reports_purchase','Reports_sales','Reports_Warehouse','Reports_payments_purchase_Return',
						'Reports_payments_Sale_Returns','Reports_payments_Purchases','Reports_payments_Sales'];

		// Extra (Point of sale - IMPORT - EXPORT )
		$extra = ['POS','product_import','customers_import','suppliers_import'];
		


		$all_permissions = array(); 
    	array_push($all_permissions,...$user,...$roles,...$brand,...$product,...$expense,...$transfer,
									...$adjustment,...$sales,...$sales_return,...$purchases,...$quotation,
									...$purchases_return,...$customers,...$supplier,...$purchases_payment,
									...$return_payment,...$reports,...$extra);

		$length = count($all_permissions); // Number of permissions
		var_dump($length);
    	$seeder_data = array();

		for($i = 0 ; $i < $length ; $i++){
        	array_push($seeder_data,['id' => $i+1, 'name'=> $all_permissions[$i]]);
    	}


       // Insert some stuff
	DB::table('permissions')->insert(
		$seeder_data
	);
    }
}
