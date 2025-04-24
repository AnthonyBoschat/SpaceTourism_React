<?php

namespace App\Http\Controllers\Administration;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCrewRequest;
use App\Models\Crew;
use App\Services\Interfaces\imageServiceInterface;
use Illuminate\Http\Request;

class AdminCrewsController extends Controller
{


    public function __construct(private imageServiceInterface $imageService) {
        
    }


    public function index()
    {
        $crews = Crew::paginate();
        return view("admin.crews.index", compact("crews"));
    }

    public function create()
    {
        return view("admin.crews.create");
    }

    public function edit(Crew $crew)
    {
        return view("admin.crews.edit", compact("crew"));
    }

    public function update(StoreCrewRequest $request, Crew $crew){
        $validated = $request->validated();

        $validated['image'] = $this->imageService->update($request, $crew, "crews");

        $crew->update([
            'name'         => $validated['name'],
            'role'         => $validated['role'],
            'presentation' => $validated['presentation'],
            'image'        => $validated['image'] ?? $crew->image,
        ]);
        
        return redirect()
                ->route("admin.crews.index")
                ->withStatus("success")
                ->withMessage("Crew member updated successfully");
    }


    public function store(StoreCrewRequest $request)
    {

        $validated = $request->validated();
        
        if($request->hasFile('image')){
            $validated["image"] = $this->imageService->upload($validated["image"], "crews");
        }
        Crew::create($validated);

        return redirect()
                ->route("admin.crews.index")
                ->withStatus("success")
                ->withMessage("Crew member added successfully");
    }

    public function delete(Crew $crew)
    {
        $crew->delete();

        return redirect()
                        ->back()
                        ->withStatus("success")
                        ->withMessage("Crew member deleted successfully");

    }
}
