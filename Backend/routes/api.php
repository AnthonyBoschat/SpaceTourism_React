<?php

use App\Http\Controllers\DestinationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get("/destinations/index", [DestinationController::class, "index"]);
