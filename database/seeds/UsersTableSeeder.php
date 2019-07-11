<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Psy\Util\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user')->insert([
            'fullname' =>  'Nguyen Huynh Duc',
            'username' => 'duc123',
            'passwork' => 'duc123',
            'car' =>  'X45-4455',
            'phone' => '032355566',
            'email' => 'duc123@gmail.com',
            'gender' =>'1'
        ]);
    }
}
