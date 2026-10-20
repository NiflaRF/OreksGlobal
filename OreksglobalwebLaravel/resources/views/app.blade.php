<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="OREKS Crush - Vending & Flavour Supply">
        <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/images/favicon.png') }}">

        <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/convera-icons.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/nice-select.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/swiper.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/venobox.min.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/meanmenu.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <script>window.APP_BASE = @json(rtrim(parse_url(config('app.url'), PHP_URL_PATH) ?: '', '/'));</script>
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body>
        @inertia

        <script src="{{ asset('assets/js/jquery.min.js') }}"></script>
        <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>
        <script src="{{ asset('assets/js/gsap.min.js') }}"></script>
        <script src="{{ asset('assets/js/gsap-scroll-smoother.js') }}"></script>
        <script src="{{ asset('assets/js/gsap-scroll-to-plugin.min.js') }}"></script>
        <script src="{{ asset('assets/js/gsap-scroll-trigger.min.js') }}"></script>
        <script src="{{ asset('assets/js/gsap-split-text.min.js') }}"></script>
        <script src="{{ asset('assets/js/jquery.nice-select.min.js') }}"></script>
        <script src="{{ asset('assets/js/swiper.min.js') }}"></script>
        <script src="{{ asset('assets/js/venobox.min.js') }}"></script>
        <script src="{{ asset('assets/js/imagesloaded-pkgd.js') }}"></script>
        <script src="{{ asset('assets/js/isotope.pkgd.min.js') }}"></script>
        <script src="{{ asset('assets/js/vanilla-tilt.min.js') }}"></script>
        <script src="{{ asset('assets/js/gsap-animation.js') }}"></script>
        <script src="{{ asset('assets/js/meanmenu.js') }}"></script>
        <script src="{{ asset('assets/js/main.js') }}"></script>
    </body>
</html>
