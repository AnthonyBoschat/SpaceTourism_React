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


    /**
     * Display a paginated list of technologies in the admin panel.
     *
     * @group Admin – Technology
     * @authenticated
     * @response 200 {
     *   "<table>…</table>" // Extrait HTML du tableau paginé
     * }
     */
    public function index()
    {
        $technology = Technology::paginate();
        return view("admin.technology.index", compact("technology"));
    }

    /**
     * Show the form to create a new technology.
     *
     * @group Admin – Technology
     * @authenticated
     * @response 200 {
     *   "<form method=\"POST\" action=\"/admin/technology\">…</form>"
     * }
     */
    public function create()
    {
        return view("admin.technology.create");
    }

    /**
     * Show the form to edit an existing technology.
     *
     * @group Admin – Technology
     * @authenticated
     * @urlParam technology integer required The ID of the technology. Example: 1
     * @response 200 {
     *   "<form method=\"POST\" action=\"/admin/technology/{technology}\">…</form>"
     * }
     */
    public function edit(Technology $technology)
    {
        return view("admin.technology.edit", compact("technology"));
    }

    /**
     * Update an existing technology.
     *
     * @group Admin – Technology
     * @authenticated
     * @urlParam technology integer required The ID of the technology. Example: 1
     * @bodyParam name string required The name of the technology. Example: "Teleportation Matrix"
     * @bodyParam presentation string required A presentation/description. Example: "Permet de téléporter instantanément…"
     * @bodyParam image file Nullable New image (jpeg, png, webp…). Max 2 MB.
     * @response 302 {
     *   "redirect": "/admin/technology"
     * }
     */
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


    /**
     * Store a new technology.
     *
     * @group Admin – Technology
     * @authenticated
     * @bodyParam name string required The name of the technology. Example: "Hyperdrive"
     * @bodyParam presentation string required A presentation/description. Example: "Système de propulsion supraluminique…"
     * @bodyParam image file Nullable Image file (jpeg, png, webp…). Max 2 MB.
     * @response 302 {
     *   "redirect": "/admin/technology"
     * }
     */
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

    /**
     * Delete a technology.
     *
     * @group Admin – Technology
     * @authenticated
     * @urlParam technology integer required The ID of the technology to delete. Example: 1
     * @response 302 {
     *   "redirect": "/admin/technology"
     * }
     */
    public function delete(Technology $technology)
    {
        $technology->delete();

        return redirect()
                        ->back()
                        ->withStatus("success")
                        ->withMessage("Technology deleted successfully");

    }
}
