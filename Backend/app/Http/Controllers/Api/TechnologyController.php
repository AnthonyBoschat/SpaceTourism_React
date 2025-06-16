<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Technology;
use App\Services\Interfaces\imageServiceInterface;
use Illuminate\Http\Request;

class TechnologyController extends Controller
{

    public function __construct(private imageServiceInterface $imageService) {
        
    }

     /**
     * Get the full list of technologies
     *
     * @group Technology
     * @response 200 {
     *   "data": [
     *     {
     *       "id": 1,
     *       "name": "Hyperdrive",
     *       "presentation": "Système de propulsion supraluminique…",
     *       "image": "technology/hyperdrive.jpg",
     *       "created_at": "2025-02-10T11:00:00.000000Z",
     *       "updated_at": "2025-06-01T09:45:00.000000Z"
     *     }
     *   ]
     * }
     */
    public function index(){
        $all_technology = Technology::all();
        return $all_technology;
    }
}
