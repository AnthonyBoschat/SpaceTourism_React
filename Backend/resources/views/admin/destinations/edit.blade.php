{{logger($destination)}};

<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-stone-800 dark:text-stone-200 leading-tight">
            {{ __('Editing Destination') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-stone-800 overflow-hidden shadow-sm sm:rounded-lg">
                <form action="{{route("admin.destinations.update", $destination)}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="p-6 text-stone-900 dark:text-stone-100">
                        <!-- Name -->
                        <div>
                            <x-input-label for="name" value="Name"/>
                            <x-text-input value="{{$destination->name}}" id="name" class="block mt-1 w-full hover:dark:border-zinc-600" type="text" name="name" required autofocus/>
                            <x-input-error :messages="$errors->get('name')" class="mt-2"/>
                        </div>

                        <!-- Description -->
                        <div class="block mt-4">
                            <x-input-label for="description" value="Description"/>
                            <textarea required name="description" id="description" class="border-zinc-300 dark:border-zinc-700 hover:dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 focus:border-orange-500 dark:focus:border-orange-600 focus:ring-orange-500 dark:focus:ring-orange-600 rounded-md shadow-sm w-full">{{$destination->description}}</textarea>
                            <x-input-error :messages="$errors->get('description')" class="mt-2"/>
                        </div>

                         <!-- Distance -->
                         <div>
                            <x-input-label for="distance" value="Distance"/>
                            <x-text-input value="{{$destination->distance}}" id="distance" class="block mt-1 w-full hover:dark:border-zinc-600" type="text" name="distance" required autofocus/>
                            <x-input-error :messages="$errors->get('distance')" class="mt-2"/>
                        </div>


                        <!-- travelTime -->
                        <div>
                            <x-input-label for="travelTime" value="travelTime"/>
                            <x-text-input value="{{$destination->travelTime}}" id="travelTime" class="block mt-1 w-full hover:dark:border-zinc-600" type="text" name="travelTime" required autofocus/>
                            <x-input-error :messages="$errors->get('travelTime')" class="mt-2"/>
                        </div>

                        <!-- Image -->
                        <div class="block mt-4">

                            <x-input-label for="image" value="Image" class="mb-2"/>

                                <div class="mb-2">
                                    <img src="{{Storage::url($destination->image)}}" alt="" width="200px">
                                </div>

                            <x-text-input id="image" class="block mt-1 w-full" type="file" name="image"
                                          value="{{$destination->image}}"
                            />
                            <x-input-error :messages="$errors->get('image')" class="mt-2"/>
                        </div>


                        <div class="flex items-center justify-end mt-4">
                            <x-primary-button class="ms-4">
                                Edit Destination
                            </x-primary-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>