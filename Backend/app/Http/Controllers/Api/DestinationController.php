<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Destination;
use App\Services\Interfaces\imageServiceInterface;
use Illuminate\Http\Request;

class DestinationController extends Controller
{
    
    public function __construct(private imageServiceInterface $imageService) {
    }

    /**
     * Get the full list of destinations
     *
     * @group Destination
     * @response 200 {
     *   "data": [
     *     {
     *       "id": 1,
     *       "name": "Mars",
     *       "description": "La planète rouge…",
     *       "distance": "225 million km",
     *       "travelTime": "7 mois",
     *       "image": "destinations/mars.jpg",
     *       "created_at": "2025-04-15T10:00:00.000000Z",
     *       "updated_at": "2025-05-20T14:30:00.000000Z"
     *     }
     *   ]
     * }
     */
    public function index(){
        $destinations = Destination::all();
        return $destinations;
    }
}
