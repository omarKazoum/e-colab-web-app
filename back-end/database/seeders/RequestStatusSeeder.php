<?php

namespace Database\Seeders;

use App\Models\RequestStatus;
use Illuminate\Database\Seeder;

class RequestStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $requestStatus=['En attente'=>'','accepté'=>'','refusé'=>''];

        foreach ($requestStatus as $label){
            $pt=new RequestStatus();
            $pt->label=$label;
            $pt->description="";
            $pt->save();
        }
    }
}
