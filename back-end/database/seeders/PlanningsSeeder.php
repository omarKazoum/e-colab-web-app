<?php

namespace Database\Seeders;

use App\Models\Planning;
use App\Models\Position;
use App\Models\Role;
use App\Models\User;
use App\Models\WorkMode;
use Illuminate\Database\Seeder;

class PlanningsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $workModes=WorkMode::all()->pluck('id');
        $membersUserId=User::where('role_id',Role::where('label','membre')->first()->id)->pluck('id');

        $positions=Position::all();
        for($i=0;$i<5;$i++) {
            $p = new Planning();
            $p->date = now();
            $p->work_mode_id=$workModes[0];
            $p->position_id=$i+1;
            $p->user_id=$membersUserId[$i];
            $p->presence_type_id=1;
            $p->save();
        }

    }
}
