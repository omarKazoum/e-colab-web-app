<?php

namespace Database\Seeders;

use App\Models\BuisnessUnit;
use App\Models\PresenceType;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CitiesSeeder::class);
        $this->call(BuildingsSeeder::class);
        $this->call(OpenSpacesSeeder::class);

        $this->call(BuisnessUnitsSeeder::class);
        $this->call(TeamsSeeder::class);
        $this->call(PositionsSeeder::class);

        $this->call(JobTypesSeeder::class);
        $this->call(RolesSeeder::class);
        $this->call(UsersSeeder::class);

        $this->call(WorkModesSeeder::class);
        $this->call(PresenceTypesSeeder::class);



    }
}
