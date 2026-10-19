<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('/about', fn () => Inertia::render('About'))->name('about');
Route::get('/services', fn () => Inertia::render('Services'))->name('services');
Route::get('/portfolio', fn () => Inertia::render('Portfolio'))->name('portfolio');
Route::get('/contact', fn () => Inertia::render('Contact'))->name('contact');
Route::get('/team', fn () => Inertia::render('Team'))->name('team');
Route::get('/career', fn () => Inertia::render('Career'))->name('career');
Route::get('/faq', fn () => Inertia::render('Faq'))->name('faq');
Route::get('/feedback', fn () => Inertia::render('Feedback'))->name('feedback');
Route::get('/blog', fn () => Inertia::render('Blog'))->name('blog');
Route::get('/blog-details', fn () => Inertia::render('BlogDetails'))->name('blog-details');
Route::get('/portfolio-details', fn () => Inertia::render('PortfolioDetails'))->name('portfolio-details');
Route::get('/service-details', fn () => Inertia::render('ServiceDetails'))->name('service-details');
Route::get('/career-details', fn () => Inertia::render('StaticPage', [
    'title' => 'Career Details',
    'eyebrow' => 'CAREER DETAILS',
    'intro' => 'This page is being rebuilt in Laravel + Inertia. The next phase will move the original content, sections, and interactions into this route.',
    'highlights' => [
        ['title' => 'Layout in progress', 'description' => 'The shared header, footer, and route are now wired into Laravel.'],
        ['title' => 'Content migration next', 'description' => 'We will replace this scaffold with the original page sections and copy.'],
        ['title' => 'Assets already copied', 'description' => 'The site CSS, JS, fonts, and images are available from the Laravel public folder.'],
    ],
]))->name('career-details');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
