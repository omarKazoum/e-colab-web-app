<?php

namespace Database\Seeders;

use App\Models\Building;
use App\Models\City;
use Illuminate\Database\Seeder;

class BuildingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $building=new Building();
        $building->city_id=City::where('label','agadir')->get()->first()->id;
        $building->adress="cité founty";
        $building->save();
    }
}
