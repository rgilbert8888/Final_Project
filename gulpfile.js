//this gulp file contains two tasks so far...//

var gulp = require("gulp");
var sass = require("gulp-sass");  //automatically sets up my watch
var watch = require("gulp-watch");
var browserSync = require("browser-sync"); //auto refreshes my browser
var reload = browserSync.reload;

gulp.task('sass', function(){
	gulp.src('scss/main.scss') //change for your filepath
		.pipe(sass({
			includePaths: ['scss'] //change
		}))
		.pipe(gulp.dest("scss/.")) //destination change for yours
});

gulp.task('serve', function(){  //watching for changes to files
	
	browserSync.init(['scss/main.css','*.html', 'scripts/*.js'], {
		server: {
			baseDir: './'
		}
	});
});

//replaces sass watch
gulp.task('watch', ['sass', 'serve'], function(){
	gulp.watch(['scss/**/*.scss'], ['sass']);
})


// The pipe() function reads data from a readable stream as it becomes available and writes it to a destination writable stream.

