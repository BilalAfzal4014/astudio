<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;

class ProjectSeeder extends Seeder
{
    public function run()
    {
        Project::create([
            'name' => 'Project Alpha',
            'department' => 'Development',
            'start_date' => '2023-01-01',
            'end_date' => '2023-12-31',
            'status' => 'ongoing',
        ]);

        Project::create([
            'name' => 'Project Beta',
            'department' => 'Marketing',
            'start_date' => '2023-03-01',
            'end_date' => '2024-01-31',
            'status' => 'pending',
        ]);
    }
}
