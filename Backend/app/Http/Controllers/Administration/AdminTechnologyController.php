<?php

namespace App\Http\Controllers\Administration;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTechnologyRequest;
use App\Models\Technology;
use App\Services\Interfaces\imageServiceInterface;

class AdminTechnologyController extends Controller
{
    public function __construct(private imageServiceInterface $imageService) {
        
    }


    public function index()
    {
        $technology = Technology::paginate();
        return view("admin.technology.index", compact("technology"));
    }

    public function create()
    {
        return view("admin.technology.create");
    }

    public function edit(Technology $technology)
    {
        return view("admin.technology.edit", compact("technology"));
    }

    public function update(StoreTechnologyRequest $request, Technology $technology){
        $validated = $request->validated();

        $validated['image'] = $this->imageService->update($request, $technology, "technology");

        $technology->update([
            'name'         => $validated['name'],
            'presentation'         => $validated['presentation'],
            'image'        => $validated['image'] ?? $technology->image,
        ]);
        
        return redirect()
                ->route("admin.technology.index")
                ->withStatus("success")
                ->withMessage("technology member updated successfully");
    }


    public function store(StoreTechnologyRequest $request)
    {

        $validated = $request->validated();
        
        if($request->hasFile('image')){
            $validated["image"] = $this->imageService->upload($validated["image"], "technology");
        }
        Technology::create($validated);

        return redirect()
                ->route("admin.technology.index")
                ->withStatus("success")
                ->withMessage("Technology added successfully");
    }

    public function delete(Technology $technology)
    {
        $technology->delete();

        return redirect()
                        ->back()
                        ->withStatus("success")
                        ->withMessage("Technology deleted successfully");

    }
}
