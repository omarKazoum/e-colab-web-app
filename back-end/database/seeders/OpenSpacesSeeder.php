<?php

namespace Database\Seeders;

use App\Models\Building;
use App\Models\OpenSpace;
use Illuminate\Database\Seeder;

class OpenSpacesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $openSpaces=['open space label 1','open space label 2'];
        foreach ($openSpaces as $os){
            $openSpace=new OpenSpace();
            $openSpace->floor=1;
            $openSpace->building_id=Building::first()->id;
            $openSpace->label=$os;
            $openSpace->save();

        }
    }
}
