var gulp = require('gulp');
var tslint = require('gulp-tslint');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify');

//这个ok
// gulp.task('bundle-js-other', function(){
//   var b = browserify({entries: './temp/source/js/main.js', debug: true});
//   return b.bundle()
//     .pipe(source('app.js'))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(uglify())
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('./dist/source/js/'));
// });
gulp.task('bundle-test', function(){
  var b = browserify({entries: './temp/test/main.test.js', debug: true});
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./temp/test/'));
});

gulp.task('lint', function() {
  return gulp.src(['./test/**/**.test.ts'])
          .pipe(tslint({formatter: 'verbose'}))
          .pipe(tslint.report());
})
var tsTestProject = ts.createProject('./tsconfig.json');

gulp.task('tsc-test',function(){
  return gulp.src('./test/*.test.ts').pipe(tsTestProject()).js.pipe(gulp.dest('./temp/test/'));
});

gulp.task('browser-sync', function(done){
  browserSync.init({
    server: {baseDir:"./temp/test", index: "index.html"},
    port:10099
  });
  gulp.watch('./test/main.test.ts', tscTest);
  gulp.watch('./temp/test/main.test.js').on('change',browserSync.reload);
  done();
});

function tscTest(done){
  gulp.src('./test/**/**.test.ts').pipe(tsTestProject()).js.pipe(gulp.dest('./temp/test/'));
  done();
}
// gulp.task('default', gulp.series('lint','tsc-test','browser-sync'));
gulp.task('default', gulp.series('lint','tsc-test','bundle-test','browser-sync'));
