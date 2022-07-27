<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

interface CrudInterface
{
    public function create(Request $request): Model;
    public function read(int $id): Model;
    public function update(Request $request, int $id): Model;
    public function delete(int $id): bool;
}
