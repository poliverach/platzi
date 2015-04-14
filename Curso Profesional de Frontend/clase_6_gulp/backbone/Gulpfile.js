var gulp        = require('gulp'),
    uglify      = require('gulp-uglify'),
    changed     = require('gulp-changed')
    imagemin    = require('gulp-imagemin'),
    stripDebug  = require('gulp-strip-debug'),
    minifyCSS   = require('gulp-minify-css'),
    minifyHTML  = require('gulp-minify-html'),
    browserify  = require('gulp-browserify'),
    stylus      = require('gulp-stylus'),
    gzip        = require('gulp-gzip');

gulp.task('js', function () {
  gulp.src('app/js/main.js')
    .pipe(browserify())
    .pipe(uglify({ compress: true }))
    .pipe(stripDebug())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('css', function () {
  gulp.src('app/css/**/*.css')
    //  * for keeping all (default), 1 for keeping first one only, 0 for removing all
    .pipe(minifyCSS({ keepSpecialComments: '*', keepBreaks: '*'}))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('images', function () {
  var imgSrc = './app/img/**/*',
      imgDst = './public/img';

  gulp.src('app/img/**/*')
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

gulp.task('html', function () {
  var htmlSrc = './app/*.html',
      htmlDst = './public';

  gulp.src(htmlSrc)
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

gulp.task('fonts', function () {
  gulp.src('app/fonts/**')
    .pipe(gulp.dest('./public/fonts'));
});

gulp.task('data', function () {
   gulp.src('app/data.json')
    .pipe(gulp.dest('./public'));
});

// Get one .styl file and render
gulp.task('one', function () {
  gulp.src('./css/one.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css/build'));
});

// Options
// Options compress
gulp.task('compress-styl', function () {
  gulp.src('./css/compressed.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./css/build'));
});

// Gzip
gulp.task('compress-gzip', function() {
  gulp.src('./dev/scripts/*.js')
    .pipe(gzip())
    .pipe(gulp.dest('./public/scripts'));
});

gulp.task('default', [ 'js', 'css', 'images', 'html', 'fonts', 'data', 'one', 'compress-styl', 'compress-gzip' ]);
