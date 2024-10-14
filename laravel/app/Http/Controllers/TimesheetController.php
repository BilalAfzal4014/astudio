<?php

namespace App\Http\Controllers;

use App\Models\Timesheet;
use Illuminate\Http\Request;

class TimesheetController extends Controller
{
    public function store(Request $request) {
        $validated = $request->validate([
            'task_name' => 'required|string',
            'date' => 'required|date',
            'hours' => 'required|integer|min:0',
            'user_id' => 'required|exists:users,id',
            'project_id' => 'required|exists:projects,id',
        ]);

        $timesheet = Timesheet::create($validated);
        return response()->json($timesheet, 201);
    }

    public function show($id) {
        $timesheet = Timesheet::findOrFail($id);
        return response()->json($timesheet);
    }

    public function index(Request $request) {
        $query = Timesheet::query();

        if ($request->has('task_name')) {
            $query->where('task_name', 'like', '%' . $request->task_name . '%');
        }
        if ($request->has('user_id')) {
            $query->where('user_id', $request->user_id);
        }
        if ($request->has('project_id')) {
            $query->where('project_id', $request->project_id);
        }
        if ($request->has('date')) {
            $query->where('date', $request->date);
        }

        $timesheets = $query->get();
        return response()->json($timesheets);
    }

    public function update(Request $request, $id) {
        $validated = $request->validate([
            'task_name' => 'sometimes|string',
            'date' => 'sometimes|date',
            'hours' => 'sometimes|integer|min:0',
            'user_id' => 'sometimes|exists:users,id',
            'project_id' => 'sometimes|exists:projects,id',
        ]);

        $timesheet = Timesheet::findOrFail($id);
        $timesheet->update($validated);

        return response()->json($timesheet);
    }

    public function destroy($id) {
        $timesheet = Timesheet::findOrFail($id);
        $timesheet->delete();

        return response()->json(['message' => 'Timesheet deleted successfully']);
    }
}

