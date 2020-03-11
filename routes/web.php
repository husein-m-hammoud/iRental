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

Route::get('/W', function () {
    return view('welcome');
});
Route::get('/', function () {
    return view('Home');
})->name('/');
Route::get('/test', function () {
    return view('test2');
});
Route::get('/ProfileInformation', function () {
    return view('ProfileInformation');
});
Route::post('/addcar', 'CarController@store');
Route::post('/adduser', 'CarController@adduser');
Route::get('/get_all_car/{make}/{available}','CarController@Get_all_car');
Route::get('carlist','CarController@index');
Route::get('car/{id}','CarController@show')->middleware('auth');;
Route::get('profile/car/{id}','CarController@show');
Route::get('get_car/{id}','CarController@Get_Car');
// Route::post('/adduser','CarController@send_email');


Route::get('test2','CarController@test');


Route::post('/AddCompany', 'CompanyController@store');
Route::get('/getauth', 'CompanyController@getauth');
Route::get('/get_all_company', 'CompanyController@Get_all_company');
Route::get('/profile/{id}', 'CompanyController@index');
Route::get('CarOwners', 'CompanyController@show');
Route::get('/carsofcompany/{id}/{make}/{available}', 'CompanyController@CarsOfCompany');


Route::get('/auth/redirect/{provider}', 'SocialController@redirect');
Route::get('/callback/{provider}', 'SocialController@callback');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();
Route::get('/profile', 'CompanyController@check');
Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('/login', 'Auth\LoginController@login');
Route::get('rent/login', 'Auth\LoginController@showLoginForm')->name('rent/login');
Route::post('/rent/login', 'Auth\LoginController@login');

// Route::post('/rent/login', 'Auth\LoginController@view');
