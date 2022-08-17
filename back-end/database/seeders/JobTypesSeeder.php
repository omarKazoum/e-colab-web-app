<?php

namespace Database\Seeders;

use App\Models\JobType;
use Illuminate\Database\Seeder;

class JobTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $jobTypesNames=['consultant','consultant technique','consultant fonctionel','sdm'];
        foreach ($jobTypesNames as $jobTypeName){
            $jobType=new JobType();
            $jobType->label=$jobTypeName;
            $jobType->save();

        }
    }
}
