// Load plugins
var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  cache = require('gulp-cache'),
  del = require('del'),
  runSequence = require('run-sequence');

// Styles
gulp.task('styles', function() {
  runSequence(['bootstrap-css', 'bootstrap-fonts'], 'app-css');
});

  // Bootstrap CSS
  gulp.task('bootstrap-css', function() {
    return gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css')
      .pipe(gulp.dest('web/assets/css'));
  });

  // Bootstrap Fonts
  gulp.task('bootstrap-fonts', function() {
    return gulp.src('bower_components/bootstrap/dist/fonts/**/*')
      .pipe(gulp.dest('web/assets/fonts'));
  });

  // App Styles
  gulp.task('app-css', function() {
    return sass('src/css/main.scss', {
      sourcemap: true,
      style: 'expanded'
    })
      .pipe(autoprefixer('last 2 version'))
      .pipe(gulp.dest('web/assets/css'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(cssnano())
      .pipe(gulp.dest('web/assets/css'));
  });

// Scripts
gulp.task('scripts', function() {
  runSequence(['jquery-js', 'bootstrap-js'], 'app-js');
});

  // JQuery JS
  gulp.task('jquery-js', function() {
    return gulp.src('bower_components/jquery/dist/jquery.js')
      .pipe(gulp.dest('src/js'));
  });

  // Bootstrap JS
  gulp.task('bootstrap-js', function() {
    return gulp.src('bower_components/bootstrap/dist/js/bootstrap.js')
      .pipe(gulp.dest('src/js'));
  });

  // App Scripts
  gulp.task('app-js', function() {
    return gulp.src(['src/js/jquery.js', 'src/js/bootstrap.js', 'src/js/**/*.js'])
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('default'))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('web/assets/js'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .pipe(gulp.dest('web/assets/js'));
  });

// Images
gulp.task('images', function() {
  return gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('web/assets/images'));
});

// Clean
gulp.task('clean', function() {
  return del(['web/assets/css', 'web/assets/js', 'web/assets/images', 'web/assets/fonts']);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'scripts', 'images');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('src/css/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('src/js/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('src/images/**/*', ['images']);
  
});
