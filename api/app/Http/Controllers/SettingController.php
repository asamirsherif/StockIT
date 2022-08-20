<?php

namespace App\Http\Controllers;

use App\Http\Requests\Setting\SettingRequest;
use App\Http\Resources\Setting\SettingCollection;
use App\Http\Resources\Setting\SettingResource;
use App\Models\Setting;
use App\Repositories\Setting\SettingRepositoryInterface;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    use ResponseTrait;

    private SettingRepositoryInterface $settingRepo;

    public function __construct(SettingRepositoryInterface $settingRepo)
    {
        $this->settingRepo = $settingRepo;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $setting = $this->settingRepo->create($request);
        return new SettingCollection($request);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SettingRequest $request)
    {
        $settingCreated = $this->settingRepo->create($request);
        if($settingCreated)
            return $this->succWithData(new SettingResource($settingCreated), "setting Created successfully");
        else
            return $this->errMsg("setting not created!");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $setting = Setting::find($id);

        if(!$setting)
            return $this->errMsg('This setting doesn\'t exist');
        else
            return $this->succWithData(new SettingResource($setting), "setting details");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SettingRequest $request, $id)
    {
        $setting = Setting::find($id);
        if(!$setting)
            return $this->errMsg('This setting doesn\'t exist');

        $settingUpdated = $this->settingRepo->update($request, $id);

        if($settingUpdated)
            return $this->succWithData(new SettingResource($settingUpdated), "setting updated successfully");
        else
            return $this->errMsg("setting not updated!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $setting = Setting::find($id);

        if(!$setting)
            return $this->errMsg('This setting doesn\'t exist');

        $settingDeleted = $this->settingRepo->delete($id);

        if($settingDeleted)
            return $this->succWithData(new SettingResource($setting), "setting deleted successfully");
        else
            return $this->errMsg("setting not deleted");
    }
}
