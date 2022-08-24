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
        // devgeeks_team
        // wanir
        // $u1=new User();
        // $u1->role_id=Role::where('label','manager')->first()->id;
        // $u1->team_id=Team::first()->id;
        // $u1->first_name="mohamed";
        // $u1->last_name="wanir";
        // $u1->email="mohamed.wanir@cegedim.com";
        // $u1->password_hash=Hash::make('12345');
        // $u1->remember_token='';
        // $u1->remember_token_created_at=now();
        // $u1->job_type_id=JobType::first()->id;
        // $u1->save();
        // //a rh user
        // $u1=new User();
        // $u1->role_id=Role::where('label','rh')->first()->id;
        // $u1->team_id=Team::first()->id;
        // $u1->first_name="loubna";
        // $u1->last_name="merrakchi";
        // $u1->email="loubna.merrakchi@cegedim.com";
        // $u1->password_hash=Hash::make('12345');
        // $u1->remember_token='';
        // $u1->remember_token_created_at=now();
        // $u1->job_type_id=JobType::first()->id;
        // $u1->save();

                // devGeeks members
        $devGeeks[]=['first_name'=>'omar', 'last_name'=>'kazoum'];
        $devGeeks[]=['first_name'=>'safae', 'last_name'=>'balha'];
        $devGeeks[]=['first_name'=>'badereddine', 'last_name'=>'abourial'];
        $devGeeks[]=['first_name'=>'mohammed', 'last_name'=>'wanir'];
        $devGeeks[]=['first_name'=>'wassim', 'last_name'=>'lhlali'];
        $devGeeks[]=['first_name'=>'ibrahim', 'last_name'=>'benjermoun'];
        $teamId=Team::where('name','devGeeks')->first()->id;
        $roleId=Role::where('label','membre')->first()->id;
        foreach($devGeeks as $membre){
            $u=new User();
            $u->role_id=$roleId;
            $u->team_id=  $teamId;
            $u->first_name=$membre['first_name'];
            $u->last_name=$membre['last_name'];
            $u->email=$membre['first_name'].'.'.$membre['last_name']."@cegedim.com";
            $u->password_hash=Hash::make('12345');
            $u->remember_token='';
            $u->remember_token_created_at=now();
            $u->job_type_id=JobType::first()->id;
            $u->save();
        }
        //    les sentinel members
        $sentinel[]=['first_name'=>'saida', 'last_name'=>'barakat'];
        $sentinel[]=['first_name'=>'abdelaziz', 'last_name'=>'afrakla'];
        $sentinel[]=['first_name'=>'el mehdi', 'last_name'=>'bairouk'];
        $sentinel[]=['first_name'=>'mouhcine', 'last_name'=>'daali'];
        $sentinel[]=['first_name'=>'el hassan', 'last_name'=>'touza'];
        $teamId=Team::where('name','les sentinel')->first()->id;
        $roleId=Role::where('label','membre')->first()->id;
        foreach($sentinel as $membre){
            $u=new User();
            $u->role_id=$roleId;
            $u->team_id=$teamId;
            $u->first_name=$membre['first_name'];
            $u->last_name=$membre['last_name'];
            $u->email=$membre['first_name'].'.'.$membre['last_name']."@cegedim.com";
            $u->password_hash=Hash::make('12345');
            $u->remember_token='';
            $u->remember_token_created_at=now();
            $u->job_type_id=JobType::first()->id;
            $u->save();
        }
        // inTheloop members
        $inTheloop[]=['first_name'=>'abdelghafour', 'last_name'=>'belkhoukh'];
        $inTheloop[]=['first_name'=>'el mahdi', 'last_name'=>'gliouin'];
        $inTheloop[]=['first_name'=>'jawad', 'last_name'=>'doufare'];
        $inTheloop[]=['first_name'=>'khalil', 'last_name'=>'el kadih'];
        $inTheloop[]=['first_name'=>'mohamed', 'last_name'=>'balizi'];
        $inTheloop[]=['first_name'=>'safia', 'last_name'=>'maani'];
        $teamId=Team::where('name','inTheloop')->first()->id;
        $roleId=Role::where('label','membre')->first()->id;
        foreach($inTheloop as $membre){
            $u=new User();
            $u->role_id=$roleId;
            $u->team_id=$teamId;
            $u->first_name=$membre['first_name'];
            $u->last_name=$membre['last_name'];
            $u->email=$membre['first_name'].'.'.$membre['last_name']."@cegedim.com";
            $u->password_hash=Hash::make('12345');
            $u->remember_token='';
            $u->remember_token_created_at=now();
            $u->job_type_id=JobType::first()->id;
            $u->save();
        }
        // allForOne
        $allForOne[]=['first_name'=>'abdelmajid', 'last_name'=>'el ayachi'];
        $allForOne[]=['first_name'=>'abdessalam', 'last_name'=>'el-boukri'];
        $allForOne[]=['first_name'=>'houssam-eddine', 'last_name'=>'lamzoudi'];
        $allForOne[]=['first_name'=>'khadija', 'last_name'=>'chennaoui'];
        $allForOne[]=['first_name'=>'oussama', 'last_name'=>'el bechari'];
        $allForOne[]=['first_name'=>'saad', 'last_name'=>'chaay'];
        $teamId=Team::where('name','allForOne')->first()->id;
        $roleId=Role::where('label','membre')->first()->id;
        foreach($allForOne as $membre){
            $u=new User();
            $u->role_id=$roleId;
            $u->team_id=$teamId;
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
