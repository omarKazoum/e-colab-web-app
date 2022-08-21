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
        $requestStatus=['En attente'=>'','accepté'=>'','refusé'=>'','annulé'];

        foreach ($requestStatus as $label=>$des){
            $pt=new RequestStatus();
            $pt->label=$label;
            $pt->description=$des;
            $pt->save();
        }
    }
}
