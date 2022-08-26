<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Expense;
use App\Models\PaymentPurchase;
use App\Models\PaymentPurchaseReturns;
use App\Models\PaymentSale;
use App\Models\PaymentSaleReturns;
use App\Models\Product;
use App\Models\ProductVariant;
use App\Models\ProductWarehouse;
use App\Models\Provider;
use App\Models\Purchase;
use App\Models\PurchaseDetail;
use App\Models\Role;
use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\User;
use App\Models\Warehouse;
use App\utils\helpers;
use Carbon\Carbon;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use DB;

class ReportController extends Controller
{
    //-----------------Profit And Loss ---------------------------\\

    public function ProfitAndLoss(request $request)
    {

        // $this->authorizeForUser($request->user('api'), 'Reports_profit', Client::class);

        $role = Auth::user()->roles()->first();
        $view_records = Role::findOrFail($role->id)->inRole('record_view');

        $data = [];

        $item['sales'] = Sale::where('deleted_at', '=', null)->whereBetween('date', array($request->from, $request->to))
            ->select(
                DB::raw('SUM(GrandTotal) AS sum'),
                DB::raw("count(*) as nmbr")
            )->first();

        $item['purchases'] = Purchase::where('deleted_at', '=', null)->whereBetween('date', array($request->from, $request->to))
            ->select(
                DB::raw('SUM(GrandTotal) AS sum'),
                DB::raw("count(*) as nmbr")
            )->first();

        $item['returns_sales'] = SaleReturn::where('deleted_at', '=', null)->whereBetween('date', array($request->from, $request->to))
            ->select(
                DB::raw('SUM(GrandTotal) AS sum'),
                DB::raw("count(*) as nmbr")
            )->first();

        $item['returns_purchases'] = PurchaseReturn::where('deleted_at', '=', null)->whereBetween('date', array($request->from, $request->to))
            ->select(
                DB::raw('SUM(GrandTotal) AS sum'),
                DB::raw("count(*) as nmbr")
            )->first();

        $item['paiement_sales'] = PaymentSale::whereBetween('date', array($request->from, $request->to))
            ->select(
                DB::raw('SUM(montant) AS sum')
            )->first();

        $item['PaymentSaleReturns'] = PaymentSaleReturns::whereBetween('date', array($request->from, $request->to))
            ->select(
                DB::raw('SUM(montant) AS sum')
            )->first();

        $item['PaymentPurchaseReturns'] = PaymentPurchaseReturns::whereBetween('date', array($request->from, $request->to))
            ->select(
                DB::raw('SUM(montant) AS sum')
            )->first();

        $item['paiement_purchases'] = PaymentPurchase::whereBetween('date', array($request->from, $request->to))
            ->select(
                DB::raw('SUM(montant) AS sum')
            )->first();

        $item['expenses'] = Expense::whereBetween('date', array($request->from, $request->to))
            ->where('deleted_at', '=', null)
            ->select(
                DB::raw('SUM(amount) AS sum')
            )->first();

        $item['return_sales'] = SaleReturn::where('deleted_at', '=', null)
            ->whereBetween('date', array($request->from, $request->to))
            ->where(function ($query) use ($view_records) {
                if (!$view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->get(DB::raw('SUM(GrandTotal)  As sum'))
            ->first()->sum;

        $item['today_purchases'] = Purchase::where('deleted_at', '=', null)
            ->whereBetween('date', array($request->from, $request->to))
            ->where(function ($query) use ($view_records) {
                if (!$view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->get(DB::raw('SUM(GrandTotal)  As sum'))
            ->first()->sum;

        $item['purchases_return'] = PurchaseReturn::where('deleted_at', '=', null)
            ->whereBetween('date', array($request->from, $request->to))
            ->where(function ($query) use ($view_records) {
                if (!$view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->get(DB::raw('SUM(GrandTotal)  As sum'))
            ->first()->sum;


            $item['profit'] = $item['sales']['sum'] - $item['purchases']['sum'];
            $item['payment_received'] = $item['paiement_sales']['sum'] + $item['PaymentPurchaseReturns']['sum'];
            $item['payment_sent'] = $item['paiement_purchases']['sum'] + $item['PaymentSaleReturns']['sum'] + $item['expenses']['sum'];
            $item['paiement_net'] = $item['payment_received'] - $item['payment_sent'];

            return response()->json(['data' => $item]);

    }
}
