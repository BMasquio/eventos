<?php

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
        $this->call(UsersTableSeeder::class);
        //                $this->call(RolesTableSeeder::class);
        //                $this->call(EventsTableSeeder::class);
        //                $this->call(SubEventsTableSeeder::class);
        //                        $this->call(PeopleTableSeeder::class);
        //                $this->call(AdvisorsTableSeeder::class);
        //                $this->call(ContactsTableSeeder::class);
        //                $this->call(AddressesTableSeeder::class);
    }
}
