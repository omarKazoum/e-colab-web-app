<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    public $timestamps=false;
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
            'role_id',
            'team_id',
            'first_name',
            'last_name',
            'email',
            'job_type_id',
            'password_hash',
            'remember_token_created_at'
    ];
    protected $hidden=[
        'password_hash',
    ];




    function role(){
        return $this->belongsTo(Role::class);
    }
    function team(){
        return $this->belongsTo(Team::class);
    }
    function jobType(){
        return $this->belongsTo(JobType::class);
    }
    function hasRole($roleLabel):bool{
        return $this->role->label==$roleLabel;
    }
    function hasAnyRole(array $roleLabels):bool{
        return in_array($this->role->label,$roleLabels);
    }

}
