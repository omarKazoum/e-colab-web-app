<?php

namespace Database\Seeders;

use App\Models\Planning;
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
        $memberUserId=User::where('role_id',Role::where('label','membre')->first()->id)->first()->id;
        for($i=0;$i<50;$i++) {
            $p = new Planning();
            $d = now();
            $d->day+=$i%10;
            $p->date = $d;
            $p->work_mode_id=$workModes[0];
            $p->position_id=1;
            $p->user_id=$memberUserId;
            $p->presence_type_id=1;
            $p->save();
        }

    }
}
