'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

const srcSass = './src/public/scss/**/*.scss'
const destSass = './src/public/css'

gulp.task('css', () => {
  return gulp
    .src(srcSass)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destSass))
})

gulp.task('default', gulp.series('css'))

gulp.task('watch', () => {
  return gulp.watch(srcSass, gulp.parallel('css'))
})
