var gulp = require('gulp');
var gutil = require('gulp-util');
var markdown = require('gulp-markdown');
var markdownpdf = require('gulp-markdown-pdf');


gulp.task('markdownpdf', function () {
    return gulp.src(['*.markdown', '*.md'])
        .pipe(markdownpdf({
            cssPath: 'pdf.css',
            paperFormat: 'A4',
            paperOrientation: 'lansdscape',
            paperBorder: '2cm'
        }))
        .pipe(gulp.dest('pdf'));
});


