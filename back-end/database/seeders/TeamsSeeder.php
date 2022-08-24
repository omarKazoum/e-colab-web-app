<?php

namespace Database\Seeders;

use App\Models\BuisnessUnit;
use App\Models\Team;
use Illuminate\Database\Seeder;

class TeamsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $teamsNames=['devGeeks','inTheloop','allForOne','les sentinel','rh','directeur_bu'];
        foreach ($teamsNames as $k => $name){
            $t=new Team();
            $t->name=$name;
            $t->max_remote_days_per_week=3;
            $t->request_deadline="09:00";
            $t->buisness_unit_id=BuisnessUnit::first()->id;
            $t->save();
        }
    }
}
