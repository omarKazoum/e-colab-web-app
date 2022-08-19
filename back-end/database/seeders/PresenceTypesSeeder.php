<?php

namespace Database\Seeders;

use App\Models\PresenceType;
use Illuminate\Database\Seeder;

class PresenceTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pts=['présent','absent'];
        foreach ($pts as $ptn){
            $pt=new PresenceType();
            $pt->label=$ptn;
            $pt->save();
        }

    }
}
