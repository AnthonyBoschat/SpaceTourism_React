<?php

namespace App\Http\Controllers;

use App\Models\Crew;
use Illuminate\Http\Request;

class CrewController extends Controller
{
   

    public function index(){
        $crews = Crew::all();
        return $crews;
    }
}
