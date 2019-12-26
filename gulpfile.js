const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const sass = require("gulp-sass")

// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "src"
      }
  });
  watch("src/*.html").on('change', browserSync.reload);
  watch("src/sass/**/*.sass", serveSass);
  watch("src/sass/**/*.scss", serveSass);
  watch("js/*.js").on('change', browserSync.reload);
};

/* gulp.task('mincss', function() {
  return gulp.src("src/css/*.css")
  .pipe(rename({suffix: ".min"}))
  .pipe(cleanCSS())
  .pipe(gulp.dest("src/css"));
}); */

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./src/sass/**/*.sass", "./src/sass/**/*.scss")
      .pipe(sass())
      .pipe(dest("src/css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;