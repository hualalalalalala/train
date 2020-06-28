var gulp = require('gulp')
var responsive = require('gulp-responsive')
gulp.task('default', function () {
 return gulp
 .src('./images/news/*.{jpg,png}')
 .pipe(
 responsive({
 '*': [
 {
 width: 90,
 rename: {
 suffix: '-90'
 }
 },
 {
 width: 180,
 rename: {
 suffix: '-180'
 }
 },
 {
 width: 360,
 rename: {
 suffix: '-360'
 }
 },
 {
 width: 540,
 rename: {
 suffix: '-540'
 }
 },
 {
 width: 720,
 rename: {
 suffix: '-720'
 }
 },
 {
 width: 900,
 rename: {
 suffix: '-900'
 }
 },
 {
 width: 1080,
 rename: {
 suffix: '-1080'
 }
 },
 {
 width: 1296,
 rename: {
 suffix: '-1296'
 }
 },
 {
 width: 1512,
 rename: {
 suffix: '-1512'
 }
 },
 {
 width: 1728,
 rename: {
 suffix: '-1728'
 }
 },
 {
 width: 2048,
 rename: {
 suffix: '-2048'
 }
 },
 {
 rename: {
 suffix: '-original'
 }
 }
 ]
 }, {
 errorOnEnlargement: false,
 skipOnEnlargement: true,
 withoutEnlargement: true
 })
 ).pipe(gulp.dest('dist/images/news'))
})
 