const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');

mix.styles([
    'public/css/codebase.css',
    'public/css/rtl.css',
], 'public/css/all.css');

mix.scripts([
    'public/js/core/jquery.min.js',
    'public/js/core/bootstrap.bundle.min.js',
    'public/js/core/jquery.slimscroll.min.js',
    'public/js/core/jquery.scrollLock.min.js',
    'public/js/core/jquery.appear.min.js',
    'public/js/core/jquery.countTo.min.js',
    'public/js/core/js.cookie.min.js',
    'public/js/core/codebase.js',
], 'public/js/all.js');