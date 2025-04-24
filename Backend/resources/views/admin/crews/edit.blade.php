<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-stone-800 dark:text-stone-200 leading-tight">
            {{ __('Editing Crew Member') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-stone-800 overflow-hidden shadow-sm sm:rounded-lg">
                <form action="{{route("admin.crews.update", $crew)}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="p-6 text-stone-900 dark:text-stone-100">
                        <!-- Name -->
                        <div>
                            <x-input-label for="name" value="Name"/>
                            <x-text-input value="{{$crew->name}}" id="name" class="block mt-1 w-full hover:dark:border-zinc-600" type="text" name="name" required autofocus/>
                            <x-input-error :messages="$errors->get('name')" class="mt-2"/>
                        </div>

                        <!-- Role -->
                        <div>
                            <x-input-label for="role" value="Role"/>
                            <x-text-input value="{{$crew->role}}" id="role" class="block mt-1 w-full hover:dark:border-zinc-600" type="text" name="role" required autofocus/>
                            <x-input-error :messages="$errors->get('role')" class="mt-2"/>
                        </div>

                        <!-- Presentation -->
                        <div class="block mt-4">
                            <x-input-label for="presentation" value="Presentation"/>
                            <textarea required name="presentation" id="presentation" class="border-zinc-300 dark:border-zinc-700 hover:dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 focus:border-orange-500 dark:focus:border-orange-600 focus:ring-orange-500 dark:focus:ring-orange-600 rounded-md shadow-sm w-full">{{$crew->presentation}}</textarea>
                            <x-input-error :messages="$errors->get('presentation')" class="mt-2"/>
                        </div>

                        <!-- Image -->
                        <div class="block mt-4">

                            <x-input-label for="image" value="Image" class="mb-2"/>

                                <div class="mb-2">
                                    <img src="{{Storage::url($crew->image)}}" alt="" width="200px">
                                </div>

                            <x-text-input id="image" class="block mt-1 w-full" type="file" name="image"
                                          value="{{$crew->image}}"
                            />
                            <x-input-error :messages="$errors->get('image')" class="mt-2"/>
                        </div>


                        <div class="flex items-center justify-end mt-4">
                            <x-primary-button class="ms-4">
                                Edit Crew
                            </x-primary-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>