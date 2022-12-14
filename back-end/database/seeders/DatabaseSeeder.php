<?php

namespace Database\Seeders;

use App\Models\BuisnessUnit;
use App\Models\PresenceType;
use App\Models\RequestStatus;
use App\Models\RequestType;
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
        $this->call(PlanningsSeeder::class);

        $this->call(RequestStatusSeeder::class);
        $this->call(RequestTypesSeeder::class);
        $this->call(RequestsSeeder::class);





    }
}
