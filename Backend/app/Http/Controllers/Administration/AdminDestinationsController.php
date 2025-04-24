<?php

namespace App\Http\Controllers\Administration;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDestinationRequest;
use App\Models\Destination;
use App\Services\Interfaces\imageServiceInterface;
use Illuminate\Http\Request;

class AdminDestinationsController extends Controller
{
    public function __construct(private imageServiceInterface $imageService) {
        
    }


    public function index()
    {
        $destinations = Destination::paginate();
        return view("admin.destinations.index", compact("destinations"));
    }

    public function create()
    {
        return view("admin.destinations.create");
    }

    public function edit(Destination $destination)
    {
        return view("admin.destinations.edit", compact("destination"));
    }

    public function update(StoreDestinationRequest $request, Destination $destination){
        $validated = $request->validated();

        $validated['image'] = $this->imageService->update($request, $destination, "destinations");

        $destination->update([
            'name'         => $validated['name'],
            'description'         => $validated['description'],
            'distance' => $validated['distance'],
            'travelTime' => $validated['travelTime'],
            'image'        => $validated['image'] ?? $destination->image,
        ]);
        
        return redirect()
                ->route("admin.destinations.index")
                ->withStatus("success")
                ->withMessage("Destination updated successfully");
    }


    public function store(StoreDestinationRequest $request)
    {

        $validated = $request->validated();
        
        if($request->hasFile('image')){
            $validated["image"] = $this->imageService->upload($validated["image"], "destinations");
        }
        Destination::create($validated);

        return redirect()
                ->route("admin.destinations.index")
                ->withStatus("success")
                ->withMessage("Destination added successfully");
    }

    public function delete(Destination $destination)
    {
        $destination->delete();

        return redirect()
                        ->back()
                        ->withStatus("success")
                        ->withMessage("Destination deleted successfully");

    }
}
