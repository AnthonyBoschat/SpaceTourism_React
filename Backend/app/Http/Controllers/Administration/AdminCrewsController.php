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


    /**
     * Display a paginated list of crew members in the admin panel.
     *
     * @group Admin – Crews
     * @authenticated
     * @response 200 {
     *   "<table>…</table>" // Extrait HTML du tableau paginé
     * }
     */
    public function index()
    {
        $crews = Crew::paginate();
        return view("admin.crews.index", compact("crews"));
    }

    /**
     * Show the form to create a new crew member.
     *
     * @group Admin – Crews
     * @authenticated
     * @response 200 {
     *   "<form method=\"POST\" action=\"/admin/crews\">…</form>"
     * }
     */
    public function create()
    {
        return view("admin.crews.create");
    }

    /**
     * Show the form to edit an existing crew member.
     *
     * @group Admin – Crews
     * @authenticated
     * @urlParam crew integer required The ID of the crew member. Example: 1
     * @response 200 {
     *   "<form method=\"POST\" action=\"/admin/crews/{crew}\">…</form>"
     * }
     */
    public function edit(Crew $crew)
    {
        return view("admin.crews.edit", compact("crew"));
    }

    /**
     * Update an existing crew member.
     *
     * @group Admin – Crews
     * @authenticated
     * @urlParam crew integer required The ID of the crew member. Example: 1
     * @bodyParam name string required The name. Example: "Jane Smith"
     * @bodyParam role string required The role. Example: "Director"
     * @bodyParam presentation string required The presentation text.
     * @bodyParam image file Nullable New image (jpeg,png,webp…). Max 2 MB.
     * @response 302 {
     *   "redirect": "/admin/crews"
     * }
     */
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


    /**
     * Store a new crew member.
     *
     * @group Admin – Crews
     * @authenticated
     * @bodyParam name string required The name. Example: "Bob Brown"
     * @bodyParam role string required The role. Example: "Producer"
     * @bodyParam presentation string required The presentation text.
     * @bodyParam image file Nullable Image file. Max 2 MB.
     * @response 302 {
     *   "redirect": "/admin/crews"
     * }
     */
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

    /**
     * Delete a crew member.
     *
     * @group Admin – Crews
     * @authenticated
     * @urlParam crew integer required The ID of the crew member. Example: 1
     * @response 302 {
     *   "redirect": "/admin/crews"
     * }
     */
    public function delete(Crew $crew)
    {
        $crew->delete();

        return redirect()
                        ->back()
                        ->withStatus("success")
                        ->withMessage("Crew member deleted successfully");

    }
}
