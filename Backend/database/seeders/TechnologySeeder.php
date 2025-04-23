<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TechnologySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("technology")->insert([
            [
                "name"          => "Launch Vehicle",
                "presentation"  => "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
                'image'         => "seed/launch.png",
                'created_at'       => now(),
                'updated_at'       => now(),

            ],
            [
                "name"          => "Spaceport",
                "presentation"  => "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
                'image'         => "seed/spaceport.png",
                'created_at'       => now(),
                'updated_at'       => now(),

            ],
            [
                "name"          => "Space Capsule",
                "presentation"  => "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
                'image'         => "seed/spaceCapsule.png",
                'created_at'       => now(),
                'updated_at'       => now(),

            ],
            
        ]);
    }
}
