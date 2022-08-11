<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id')
                ->references('id')
                ->on('roles')
                ->nullable()
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->foreignId('team_id')
                ->references('id')
                ->on('teams')
                ->nullable()
                ->constrained()
                ->onUpdate('cascade')
                ->onDelete('cascade');

            $table->string('first_name');
            $table->string('last_name');

            $table->string('password_hash');

            $table->string('email')->unique();
            //unused for now
            $table->rememberToken();

            $table->timestamp('remember_token_created_at');
            $table->timestamps();

            $table->foreignId('job_type_id')
            ->references('id')
            ->on('job_types')
            ->nullable()
            ->constrained()
            ->onUpdate('cascade')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
