<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Crew;
use App\Services\Interfaces\imageServiceInterface;
use Illuminate\Http\Request;

class CrewController extends Controller
{
   
    public function __construct(private imageServiceInterface $imageService) {
        
    }

     /**
     * Get the full list of crew members
     *
     * @group Crew
     * @response 200 {
     *   "data": [
     *     {
     *       "id": 1,
     *       "name": "Alice",
     *       "role": "Director",
     *       "presentation": "Lorem ipsum…",
     *       "image": "crews/1.jpg",
     *       "created_at": "2025-06-01T12:34:56.000000Z",
     *       "updated_at": "2025-06-10T08:21:45.000000Z"
     *     }
     *   ]
     * }
     */
    public function index(){
        $crews = Crew::all();
        return $crews;
    }
}
