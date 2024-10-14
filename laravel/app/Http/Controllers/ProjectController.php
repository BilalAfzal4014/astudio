<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string',
            'department' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date',
            'status' => 'required|in:ongoing,completed,pending',
        ]);

        $project = Project::create($validated);
        return response()->json($project, 201);
    }

    public function show($id) {
        $project = Project::findOrFail($id);
        return response()->json($project);
    }

    public function index(Request $request) {
        $query = Project::query();

        if ($request->has('name')) {
            $query->where('name', 'like', '%' . $request->name . '%');
        }
        if ($request->has('department')) {
            $query->where('department', $request->department);
        }
        if ($request->has('status')) {
            $query->where('status', $request->status);
        }

        $projects = $query->get();
        return response()->json($projects);
    }

    public function update(Request $request, $id) {
        $validated = $request->validate([
            'name' => 'sometimes|string',
            'department' => 'sometimes|string',
            'start_date' => 'sometimes|date',
            'end_date' => 'nullable|date',
            'status' => 'sometimes|in:ongoing,completed,pending',
        ]);

        $project = Project::findOrFail($id);
        $project->update($validated);

        return response()->json($project);
    }

    public function destroy($id) {
        $project = Project::findOrFail($id);
        $project->timesheets()->delete();
        $project->delete();

        return response()->json(['message' => 'Project and related timesheets deleted successfully']);
    }
}

