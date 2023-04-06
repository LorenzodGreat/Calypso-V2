<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Feed>
 */
class FeedFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'uuid'        => fake()->unique()->uuid(),
            'name' => fake()->name(),
            'img' => fake()->text(10),
            'desc' =>  fake()->paragraph(4),
            'status'      => 1,
            'created_at'  => now(),
            'updated_at'  => now(),
        ];
    }
}
