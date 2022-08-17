<?php

namespace Database\Seeders;

use App\Models\Building;
use App\Models\BuisnessUnit;
use Illuminate\Database\Seeder;

class BuisnessUnitsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ebuisness=new BuisnessUnit();
        $ebuisness->label='e-buisness';
        $ebuisness->save();
    }
}
