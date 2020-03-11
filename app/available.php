<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class available extends Model
{
    public $timestamps = false;
    public function car()
    {
        return $this->hasMany('App\car');
    }
}
