<?php

namespace App\Providers;

use App\Services\Interfaces\imageServiceInterface;
use App\Services\imageService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(imageServiceInterface::class, imageService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
