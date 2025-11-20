<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// ✅ Catch-all route for React Router (exclude /api routes)
Route::view('/{path?}', 'welcome')
    ->where('path', '^(?!api).*$')
    ->name('react');
