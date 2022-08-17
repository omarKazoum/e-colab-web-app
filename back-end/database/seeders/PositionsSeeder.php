<?php

namespace Database\Seeders;

use App\Models\OpenSpace;
use App\Models\Position;
use App\Models\Team;
use Illuminate\Database\Seeder;

class PositionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Team::all()->each(function($team){
            $openSpaceId=OpenSpace::first()->id;
            for($i=1;$i<10;$i++){

                $position=new Position();
                $position->open_space_id=$openSpaceId;
                $position->x=10;
                $position->y=10;
                $position->is_available=$i%2;
                $position->team_id=$team->id;
                $position->save();
            }
        });

    }
}
