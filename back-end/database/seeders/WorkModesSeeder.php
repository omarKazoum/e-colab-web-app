<?php

namespace Database\Seeders;

use App\Models\WorkMode;
use Illuminate\Database\Seeder;

class WorkModesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $modesNames=['présentiel'=>'présent sur site','télétravail'=>"travail depuis sa domicile"];
        foreach ($modesNames as $modeName => $des){
            $wm=new WorkMode();
            $wm->label=$modeName;
            $wm->description=$des;
            $wm->save();

        }
    }
}
