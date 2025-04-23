<?php

use App\Http\Controllers\CrewController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\TechnologyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get("/destinations/index", [DestinationController::class, "index"]);
Route::get("/crews/index", [CrewController::class, "index"]);
Route::get("/technology/index", [TechnologyController::class, "index"]);


Route::post("/crews/admin/update", [CrewController::class, "update"]);
Route::delete("/crews/admin/delete", [CrewController::class, "delete"]);

Route::post("/destinations/admin/update", [DestinationController::class, "update"]);
Route::delete("/destinations/admin/delete", [DestinationController::class, "delete"]);

Route::post("/technology/admin/update", [TechnologyController::class, "update"]);
Route::delete("/technology/admin/delete", [TechnologyController::class, "delete"]);


