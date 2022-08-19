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
        //a membre user
        $u1=new User();
        $u1->role_id=Role::where('label','membre')->first()->id;
        $u1->team_id=Team::first()->id;
        $u1->first_name="omar";
        $u1->last_name="kazoum";
        $u1->email="omar.kazoum@cegedim.com";
        $u1->password_hash=Hash::make('12345');
        $u1->remember_token='';
        $u1->remember_token_created_at=now();
        $u1->job_type_id=JobType::first()->id;
        $u1->save();
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



    }
}
