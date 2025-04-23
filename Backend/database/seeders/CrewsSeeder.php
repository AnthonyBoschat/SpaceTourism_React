<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CrewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("crews")->insert([
            [
                "name"          => "Douglas Hurley",
                "role"          => "Commander",
                "presentation"  => "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
                'image'         => "seed/douglas.png",
                'created_at'       => now(),
                'updated_at'       => now(),

            ],
            [
                "name"          => "Mark ShuttleWorth",
                "role"          => "Mission Specialist",
                "presentation"  => "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
                "image"         => "seed/mark.png",
                'created_at'       => now(),
                'updated_at'       => now(),
            ],
            [
                "name"          => "Victor Glover",
                "role"          => "Pilot",
                "presentation"  => "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
                "image"         => "seed/victor.png",
                'created_at'       => now(),
                'updated_at'       => now(),
            ],
            [
                "name"          => "Anousheh Ansari",
                "role"          => "Flight Engineer",
                "presentation"  => "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
                "image"         => "seed/anousheh.png",
                'created_at'       => now(),
                'updated_at'       => now(),
            ],
        ]);
    }
}
