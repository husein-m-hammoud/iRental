<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class car extends Model
{
    public $timestamps = false;

    public function available()
    {
        return $this->belongsTo('App\available','id','car_id');

    }
    public function company()
    {
        return $this->belongsTo('App\company');
    }
    public function potos()
    {
        return $this->hasMany('App\album','album','album_id');
    }
}
