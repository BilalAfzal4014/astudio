<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

   protected $fillable = ['first_name', 'last_name', 'date_of_birth', 'gender', 'email', 'password'];

       public function projects() {
           return $this->belongsToMany(Project::class, 'project_user');
       }

       public function timesheets() {
           return $this->hasMany(Timesheet::class);
       }
}
