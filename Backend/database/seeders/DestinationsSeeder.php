<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DestinationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("destinations")->insert([
            [
                'name'             => 'moon',
                'image'            => asset('destinations/moon.png'),
                'description'      => "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
                'distance'         => "384,400 km",
                'travelTime'       => "3 days",
                'created_at'       => now(),
                'updated_at'       => now(),
            ],
            [
                'name'             => 'mars',
                'image'            => asset('destinations/mars.png'),
                'description'      => "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
                'distance_km'      => "225 Mil. Km",
                'travelTime'       => "9 months",
                'created_at'       => now(),
                'updated_at'       => now(),
            ],
            [
                'name'             => 'europa',
                'image'            => asset('destinations/europa.png'),
                'description'      => "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
                'distance_km'      => "628 mil. km",
                'travelTime'       => "3 years",
                'created_at'       => now(),
                'updated_at'       => now(),
            ],
            [
                'name'             => 'titan',
                'image'            => asset('destinations/titan.png'),
                'description'      => "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
                'distance_km'      => "1.6 Bil. KM",
                'travelTime'       => "7 years",
                'created_at'       => now(),
                'updated_at'       => now(),
            ],
        ]);
    }
}
