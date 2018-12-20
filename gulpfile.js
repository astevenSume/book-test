var gulp = require('gulp');
var tslint = require('gulp-tslint');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync');


gulp.task('lint', function() {
  return gulp.src(['./test/**/**.test.ts'])
          .pipe(tslint({formatter: 'verbose'}))
          .pipe(tslint.report());
})
var tsTestProject = ts.createProject({
  removeComments : true,
  noImplicitAny : true,
  target : 'ES6',
  module : 'commonjs',
  declarationFiles: false,
  compilerOptions: {
    "lib": [ "es2015" ]
  }
});

gulp.task('tsc-test',function(){
  return gulp.src('./test/main.test.ts').pipe(tsTestProject()).js.pipe(gulp.dest('./temp/test/'));
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

gulp.task('default', gulp.series('lint','tsc-test', 'browser-sync'));
