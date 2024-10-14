<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function store(Request $request) {
        $validated = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        $user = User::create(array_merge(
            $validated, ['password' => bcrypt($request->password)]
        ));

        return response()->json($user, 201);
    }

    public function show($id) {
        return User::findOrFail($id);
    }

    public function index() {
        return User::all();
    }

    public function update(Request $request, $id) {
        $user = User::findOrFail($id);
        $user->update($request->all());
        return response()->json($user);
    }

    public function destroy($id) {
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json(['message' => 'User deleted']);
    }

    public function filter(Request $request) {
        $query = User::query();
        if ($request->has('first_name')) {
            $query->where('first_name', $request->first_name);
        }
        if ($request->has('gender')) {
            $query->where('gender', $request->gender);
        }
        if ($request->has('date_of_birth')) {
            $query->where('date_of_birth', $request->date_of_birth);
        }
        return response()->json($query->get());
    }
}

