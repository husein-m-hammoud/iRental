<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('transmission');
            $table->smallInteger('seats');
            $table->smallInteger('company_id');
            $table->float('price');
            $table->smallInteger('album_id');
            $table->smallInteger('user_id')->nullable();           
            $table->text('car_left')->nullable();
            $table->text('return_time')->nullable();
            $table->text('dis')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
}
