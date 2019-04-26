var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var sourceMaps = require("gulp-sourcemaps");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(sourceMaps.init())
        .pipe(tsProject()).js
        .pipe(sourceMaps.write("."))
        .pipe(gulp.dest("app"));
});

gulp.task("dev", function () {
    gulp.watch("app/**/*.ts", ['default']);
});