<?php

namespace Database\Seeders;

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
        $requestStatus=['En attente'=>'','accepté','refusé'];

        foreach ($requestStatus as $label){
            $pt=new PresenceType();
            $pt->label=$label;
            $pt->save();
        }
    }
}
