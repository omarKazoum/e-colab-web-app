<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RequestsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i=0;$i<10;$i++){
            $r=new \App\Models\Request();
            $r->date=now()->format('Y-m-d');
            $r->creator_id=1;
            $r->type_id=1+$i%2;
            $r->position_id=1;
            $r->request_status_id=1;
            $r->save();
        }
    }
}
