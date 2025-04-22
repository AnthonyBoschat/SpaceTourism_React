<?php

use App\Http\Controllers\CrewController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\TechnologyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get("/destinations/index", [DestinationController::class, "index"]);
Route::get("/crews/index", [CrewController::class, "index"]);
Route::get("/technology/index", [TechnologyController::class, "index"]);


