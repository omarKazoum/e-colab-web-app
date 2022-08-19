<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RequestTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $requestType=['Présentiel'=>'','Télétravail'=>''];
        foreach ($requestType as $label=> $des){
            $pt=new \App\Models\RequestType();
            $pt->label=$label;
            $pt->description=$des;
            $pt->save();
        }
    }
}
