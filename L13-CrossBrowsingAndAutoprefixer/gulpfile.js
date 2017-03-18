const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

// create a Gulp task
gulp.task('styles', function() {
    // get the CSS file (or files)
    gulp.src('css/**/*.css')
    // pipe to autoprefixer
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
});

// running GULP STYLES in the terminal will create the BUILD folder where autoprefix will create a stylesheet already compiled for making FLEXBOX compatible with all browsers

// create a WATCH task that will check for changes in the CSS file and run STYLES 
gulp.task('watch', function() {
    gulp.watch('css/style.css', ['styles']);
});