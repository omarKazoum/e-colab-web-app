<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersWorkStatutsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_work_statuts', function (Blueprint $table) {
            $table->date('date');

            $table->foreignId('work_mode_id')
            ->references('id')
            ->on('work_modes')
            ->nullable()
            ->constrained()
            ->onUpdate('cascade')
            ->onDelete('cascade');

            $table->foreignId('position_id')
                ->references('id')
                ->on('positions')
                ->nullable()
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->foreignId('user_id')
            ->references('id')
            ->on('users')
            ->nullable()
            ->constrained()
            ->onUpdate('cascade')
            ->onDelete('cascade');

            $table->foreignId('presence_status_id')
            ->references('id')
            ->on('presence_types')
            ->nullable()
            ->constrained()
            ->onUpdate('cascade')
            ->onDelete('cascade');

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
        Schema::dropIfExists('users_work_statuts');
    }
}
