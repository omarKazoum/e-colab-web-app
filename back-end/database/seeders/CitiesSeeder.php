<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Seeder;

class CitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cities=['agadir','rabat'];
        foreach ($cities as $c){
            $city=new City();
            $city->label=$c;
            $city->save();

        }
    }
}
