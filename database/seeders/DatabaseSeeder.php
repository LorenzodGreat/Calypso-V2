<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //  \App\Models\User::factory(30)->create();
        $this->call([
            FeedSeeder::class
        ]);
        
        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'mycalypsoshipping@gmail.com',
            'password' => Hash::make('Pa$$w0rd!'),
        ]);
    }
}
