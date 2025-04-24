<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-stone-800 dark:text-stone-200 leading-tight">
            {{ __('Crews') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-stone-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-stone-500 dark:text-stone-400">
                        <thead
                            class="text-xs text-stone-700 uppercase bg-stone-100 dark:bg-stone-600 dark:text-stone-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                    <span
                                        class="text-xs font-medium uppercase leading-4 tracking-wider text-stone-500 dark:text-white ">{{__("Id")}}</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                    <span
                                        class="text-xs font-medium uppercase leading-4 tracking-wider text-stone-500 dark:text-white ">{{__("Image")}}</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <div class="flex items-center">
                                    <span
                                        class="text-xs font-medium uppercase leading-4 tracking-wider text-stone-500 dark:text-white ">{{__("Name")}}</span>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                <div class="flex items-center">
                                    <span
                                        class="text-xs font-medium uppercase leading-4 tracking-wider text-stone-500 dark:text-white ">{{__("Role")}}</span>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3 text-center">
                                <div class="flex items-center">
                                    <span
                                        class="text-xs font-medium uppercase leading-4 tracking-wider text-stone-500 dark:text-white ">{{__("Presentation")}}</span>
                                </div>
                            </th>

                            <th scope="col" class="px-6 py-3 flex justify-end">
                                <a class="btn-new ml-3 mb-2"
                                   href="{{route("admin.crews.create")}}"
                                   title="{{ __('New') }}">{{ __('New') }}</a>
                            </th>
                        </tr>
                        </thead>

                        <tbody class="divide-y divide-stone-500 divide-solid">
                        @foreach($crews as $crew)
                            <tr class=" bg-stone-100 dark:border-stone-700  hover:transition {{$crew?->deleted_at ? " dark:bg-teal-900 hover:bg-teal-950" : "dark:bg-stone-800 hover:bg-stone-900"}}">
                                <td class="px-6 py-4 text-sm leading-5 whitespace-nowrap">
                                    {{$crew->id}}
                                </td>
                                <td class="px-6 py-4 text-sm leading-5 whitespace-nowrap">
                                    <img src="{{Storage::url($crew->image)}}" alt="" width="100px">
                                </td>
                                <td class="px-6 py-4 text-sm leading-5 whitespace-nowrap">
                                    {{$crew->name}}
                                </td>
                                <td class="px-6 py-4 text-sm leading-5">
                                    {{$crew->role}}
                                </td>
                                <td class="px-6 py-4 text-sm leading-5">
                                    {{$crew->presentation}}
                                </td>

                                <td class="px-6 py-4 text-sm leading-5 whitespace-nowrap flex flex-col gap-2 justify-end">

                                    <form action="{{ route('admin.crews.edit', $crew) }}" class="inline">
                                        @csrf
                                        <input type="submit" class="btn-std ml-3 cursor-pointer w-full" value="{{ __('Edit') }}"/>
                                    </form>
                                       
                                    
                                    <form 
                                        action="{{ route("admin.crews.delete", $crew) }}" 
                                        method="POST" 
                                        onsubmit="return confirm('Are you sure you want to delete {{$crew->name}} ? ');" 
                                        class="inline">
                                            @csrf
                                            @method('DELETE')
                                            <input 
                                                type="submit" 
                                                class="btn-danger ml-3 cursor-pointer w-full"
                                                value="{{ __('Delete') }}"/>
                                    </form>

                                </td>

                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
                <div class="px-6 mt-8">{{$crews->links()}}</div>
            </div>
        </div>
    </div>
</x-app-layout>