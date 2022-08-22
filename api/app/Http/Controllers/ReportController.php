<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Role;
use App\Models\Sale;
use App\Models\SaleDetail;
use App\Models\SalesReturn;
use App\Models\Purchase;
use App\Models\PurchaseDetail;
use App\Models\User;
use App\Models\Expense;

use DB;

use Illuminate\Http\Request;

class ReportController extends BaseController
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

        $item['returns_sales'] = SalesReturn::where('deleted_at', '=', null)->whereBetween('date', array($request->from, $request->to))
            ->select(
                DB::raw('SUM(GrandTotal) AS sum'),
                DB::raw("count(*) as nmbr")
            )->first();

        $item['expenses'] = Expense::whereBetween('date', array($request->from, $request->to))
            ->where('deleted_at', '=', null)
            ->select(
                DB::raw('SUM(amount) AS sum')
            )->first();

        $item['return_sales'] = SalesReturn::where('deleted_at', '=', null)
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


            $item['profit'] = $item['sales']['sum'] - $item['purchases']['sum'];

            return response()->json(['data' => $item]);
    }



    //----------------- Sales Chart js -----------------------\\

    public function SalesChart()
    {
        $role = Auth::user()->roles()->first();
        $view_records = Role::findOrFail($role->id)->inRole('record_view');

        // Build an array of the dates we want to show, oldest first
        $dates = collect();
        foreach (range(-6, 0) as $i) {
            $date = Carbon::now()->addDays($i)->format('Y-m-d');
            $dates->put($date, 0);
        }

        $date_range = \Carbon\Carbon::today()->subDays(6);
        // Get the sales counts
        $sales = Sale::where('date', '>=', $date_range)
            ->where('deleted_at', '=', null)
            ->where(function ($query) use ($view_records) {
                if (!$view_records) {
                    return $query->where('user_id', '=', Auth::user()->id);
                }
            })
            ->groupBy(DB::raw("DATE_FORMAT(date,'%Y-%m-%d')"))
            ->orderBy('date', 'asc')
            ->get([
                DB::raw(DB::raw("DATE_FORMAT(date,'%Y-%m-%d') as date")),
                DB::raw('SUM(GrandTotal) AS count'),
            ])
            ->pluck('count', 'date');

        // Merge the two collections;
        $dates = $dates->merge($sales);

        $data = [];
        $days = [];
        foreach ($dates as $key => $value) {
            $data[] = $value;
            $days[] = $key;
        }

        return response()->json(['data' => $data, 'days' => $days]);

    }

    //----------------- report dashboard with chart -----------------------\\

    public function report_with_echart()
    {
        $dataSales = $this->SalesChart();


        return response()->json([
            'sales' => $dataSales,
        ]);

    }

}

