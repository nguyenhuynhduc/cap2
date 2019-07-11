<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::get('/', function () {

    return view('welcome');



});

Route::get('profile', 'Admin\ManagerProfile@listAccount')->name('Profile');
Route::get('edit', 'Admin\editprofile@getEdit')->name('BT_edit');
Route::post('edit', 'Admin\editprofile@postEdit')->name('edit');

Route::get('delete', 'Admin\deleteprofile@getDelete')->name('BT_delete');

Route::get('history', 'Admin\History@getAllHistory')->name('BT_history');

Route::post('searchWholeHistory', 'Admin\History@searchHistory')->name('searchWholeHistory');


Route::get('park', 'Admin\park@listPark')->name('Park');
Route::get('editpark', 'Admin\editslot@getEdit')->name('BT_slot');
Route::post('changepark','Admin\editslot@changeSlot')->name('change_slot');
Route::get('addPark','Admin\park@addPark')->name('BT_addPark');
Route::post('addPark','Admin\park@postAddPark')->name('addPark');
Route::get('deletePark','Admin\park@deletePark')->name('BT_deletePark');
Route::get('editInforPark','Admin\park@PostInforPark')->name('BT_editInforPark');
Route::post('editInforPark','Admin\park@editInforPark')->name('editPark');

Route::get('','User\Home@getHome');

Route::get('DanhSachBaiDoDN','User\SelectPark@getDaNang')->name('BT_SelectDN');


