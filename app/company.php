<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class company extends Model
{
    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function car()
    {
        return $this->hasMany('App\car','company_id');
    }
}
