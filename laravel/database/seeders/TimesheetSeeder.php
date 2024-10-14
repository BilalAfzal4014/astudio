<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Timesheet;

class TimesheetSeeder extends Seeder
{
    public function run()
    {
        Timesheet::create([
            'task_name' => 'Design UI',
            'date' => '2023-10-10',
            'hours' => 8,
            'project_id' => 1,
            'user_id' => 1,
        ]);

        Timesheet::create([
            'task_name' => 'Backend Development',
            'date' => '2023-10-11',
            'hours' => 6,
            'project_id' => 1,
            'user_id' => 2,
        ]);
    }
}
