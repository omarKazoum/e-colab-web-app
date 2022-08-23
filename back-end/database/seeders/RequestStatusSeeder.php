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
        $requestStatus=['En attente'=>'Est en attente de la réponse du manager'
            ,'accepté'=>'Accepté par manager'
            ,'refusé'=>'Refusé par manager',
            'annulé'=>'Annulé par le membre qui l\'a créé' ];

        foreach ($requestStatus as $label=>$des){
            $pt=new RequestStatus();
            $pt->label=$label;
            $pt->description=$des;
            $pt->save();
        }
    }
}
