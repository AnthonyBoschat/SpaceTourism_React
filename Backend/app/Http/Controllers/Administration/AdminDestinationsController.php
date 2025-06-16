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


    /**
     * Display a paginated list of destinations in the admin panel.
     *
     * @group Admin – Destinations
     * @authenticated
     * @response 200 {
     *   "<table>…</table>" // Extrait HTML du tableau paginé
     * }
     */
    public function index()
    {
        $destinations = Destination::paginate();
        return view("admin.destinations.index", compact("destinations"));
    }

    /**
     * Show the form to create a new destination.
     *
     * @group Admin – Destinations
     * @authenticated
     * @response 200 {
     *   "<form method=\"POST\" action=\"/admin/destinations\">…</form>"
     * }
     */
    public function create()
    {
        return view("admin.destinations.create");
    }

    /**
     * Show the form to edit an existing destination.
     *
     * @group Admin – Destinations
     * @authenticated
     * @urlParam destination integer required The ID of the destination. Example: 1
     * @response 200 {
     *   "<form method=\"POST\" action=\"/admin/destinations/{destination}\">…</form>"
     * }
     */
    public function edit(Destination $destination)
    {
        return view("admin.destinations.edit", compact("destination"));
    }

    /**
     * Update an existing destination.
     *
     * @group Admin – Destinations
     * @authenticated
     * @urlParam destination integer required The ID of the destination. Example: 1
     * @bodyParam name string required The name of the destination. Example: "Europa"
     * @bodyParam description string required A description. Example: "Lune glacée de Jupiter…"
     * @bodyParam distance string Nullable Distance from Earth. Example: "628 million km"
     * @bodyParam travelTime string Nullable Estimated travel time. Example: "6 ans"
     * @bodyParam image file Nullable New image (jpeg,png,webp…). Max 2 MB.
     * @response 302 {
     *   "redirect": "/admin/destinations"
     * }
     */
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


    /**
     * Store a new destination.
     *
     * @group Admin – Destinations
     * @authenticated
     * @bodyParam name string required The name of the destination. Example: "Titan"
     * @bodyParam description string required A description. Example: "Lune de Saturne couverte de brume…"
     * @bodyParam distance string Nullable Distance from Earth. Example: "1.4 billion km"
     * @bodyParam travelTime string Nullable Estimated travel time. Example: "7 ans"
     * @bodyParam image file Nullable Image file. Max 2 MB.
     * @response 302 {
     *   "redirect": "/admin/destinations"
     * }
     */
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

    /**
     * Delete a destination.
     *
     * @group Admin – Destinations
     * @authenticated
     * @urlParam destination integer required The ID of the destination. Example: 1
     * @response 302 {
     *   "redirect": "/admin/destinations"
     * }
     */
    public function delete(Destination $destination)
    {
        $destination->delete();

        return redirect()
                        ->back()
                        ->withStatus("success")
                        ->withMessage("Destination deleted successfully");

    }
}
