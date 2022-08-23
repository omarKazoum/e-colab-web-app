<?php

namespace Database\Seeders;

use App\Models\JobType;
use App\Models\Role;
use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //TODO:: continue this
        //a manager user
        $u1=new User();
        $u1->role_id=Role::where('label','manager')->first()->id;
        $u1->team_id=Team::first()->id;
        $u1->first_name="mohamed";
        $u1->last_name="wanir";
        $u1->email="mohamed.wanir@cegedim.com";
        $u1->password_hash=Hash::make('12345');
        $u1->remember_token='';
        $u1->remember_token_created_at=now();
        $u1->job_type_id=JobType::first()->id;
        $u1->save();
        //a rh user
        $u1=new User();
        $u1->role_id=Role::where('label','rh')->first()->id;
        $u1->team_id=Team::first()->id;
        $u1->first_name="loubna";
        $u1->last_name="merrakchi";
        $u1->email="loubna.merrakchi@cegedim.com";
        $u1->password_hash=Hash::make('12345');
        $u1->remember_token='';
        $u1->remember_token_created_at=now();
        $u1->job_type_id=JobType::first()->id;
        $u1->save();
        $devGeeks[]=['first_name'=>'omar', 'last_name'=>'kazoum'];
        $devGeeks[]=['first_name'=>'safae', 'last_name'=>'balha'];
        $devGeeks[]=['first_name'=>'badereddine', 'last_name'=>'abourial'];
        $devGeeks[]=['first_name'=>'wassim', 'last_name'=>'lhlali'];
        $devGeeks[]=['first_name'=>'ibrahim', 'last_name'=>'benjermoun'];
        // devGeeks members
        for($i=0;$i<count($devGeeks) ;$i++){
            $membre=$devGeeks[$i];
            /*echo($membre['last_name']);
            continue;*/
            $u=new User();
            $u->role_id=Role::where('label','membre')->first()->id;
            $u->team_id=Team::first()->id;
            $u->first_name=$membre['first_name'];
            $u->last_name=$membre['last_name'];
            $u->email=$membre['first_name'].'.'.$membre['last_name']."@cegedim.com";
            $u->password_hash=Hash::make('12345');
            $u->remember_token='';
            $u->remember_token_created_at=now();
            $u->job_type_id=JobType::first()->id;
            $u->save();
        }

    }
}
