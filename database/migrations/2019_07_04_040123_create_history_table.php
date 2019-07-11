<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('history', function (Blueprint $table) {
            $table->bigIncrements('idHistory');
            $table->integer('idPark');
            $table->integer('idSlot');
            $table->integer('idUser');
            $table->date('date');
            $table->integer('checkin');
            $table->integer('checkout');
            $table->integer('Cost');
            $table->string('phone');
            $table->string('car');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('history');
    }
}
