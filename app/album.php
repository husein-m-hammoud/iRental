<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class album extends Model
{
    public $timestamps = false;

    
    public function carimge()
    {
        return $this->belongsTo('App\car','album_id');
    }
}
