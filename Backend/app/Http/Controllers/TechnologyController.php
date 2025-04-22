<?php

namespace App\Http\Controllers;

use App\Models\Technology;
use Illuminate\Http\Request;

class TechnologyController extends Controller
{
public function index(){
    $all_technology = Technology::all();
    return $all_technology;
}
}
