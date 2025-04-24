<?php

use App\Http\Controllers\Administration\AdminCrewsController;
use App\Http\Controllers\Administration\AdminDestinationsController;
use App\Http\Controllers\Administration\AdminTechnologyController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');



    Route::prefix("/admin")->name("admin.")->group(function(){

        Route::get("/crews/index", [AdminCrewsController::class, "index"])->name("crews.index");
        Route::get("/crews/edit/{crew}", [AdminCrewsController::class, "edit"])->name("crews.edit");
        Route::get("/crews/create", [AdminCrewsController::class, "create"])->name("crews.create");
        Route::delete("/crews/delete/{crew}", [AdminCrewsController::class, "delete"])->name("crews.delete");
        Route::post("/crews/store", [AdminCrewsController::class, "store"])->name("crews.store");
        Route::put("/crews/update/{crew}", [AdminCrewsController::class, "update"])->name("crews.update");





        Route::get("/destinations/index", [AdminDestinationsController::class, "index"])->name("destinations.index");
        Route::get("/destinations/edit/{destination}", [AdminDestinationsController::class, "edit"])->name("destinations.edit");
        Route::get("/destinations/create", [AdminDestinationsController::class, "create"])->name("destinations.create");
        Route::delete("/destinations/delete/{destination}", [AdminDestinationsController::class, "delete"])->name("destinations.delete");
        Route::post("/destinations/store", [AdminDestinationsController::class, "store"])->name("destinations.store");
        Route::put("/destinations/update/{destination}", [AdminDestinationsController::class, "update"])->name("destinations.update");



        Route::get("/technology/index", [AdminTechnologyController::class, "index"])->name("technology.index");
        Route::get("/technology/edit/{technology}", [AdminTechnologyController::class, "edit"])->name("technology.edit");
        Route::get("/technology/create", [AdminTechnologyController::class, "create"])->name("technology.create");
        Route::delete("/technology/delete/{technology}", [AdminTechnologyController::class, "delete"])->name("technology.delete");
        Route::post("/technology/store", [AdminTechnologyController::class, "store"])->name("technology.store");
        Route::put("/technology/update/{technology}", [AdminTechnologyController::class, "update"])->name("technology.update");


    });
});

require __DIR__.'/auth.php';
