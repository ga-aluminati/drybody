(function () {
    "use strict";

    var gulp = require('gulp'),
      plumber = require('gulp-plumber'),
      webserver = require('gulp-webserver'),
      mainBowerFiles = require('main-bower-files'),
      ngAnnotate = require('gulp-ng-annotate'),
      angularFilesort = require('gulp-angular-filesort'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      inject = require('gulp-inject'),
      del = require('del');

    var paths = {
        build : './build',
        buildImgs: './build/images',
        buildStyles: './build/styles',
        buildVendor: './build/libs',
        buildApp: './build/app',
        buildIndex: '/build/index.html',
        index: './client/index.html',
        markupSrc: './client/app/**/*.html',
        imgSrc:'./client/images/**/*',
        styleSrc: './client/styles/**/*.scss',
        appSrc: ['./client/app/**/*.js', '!client/index.html'],
        bowerSrc: './bower_components/**/*'
    };

    gulp.task('default', ['watch']);

    // refactor
    gulp.task('watch', ['serve'], function () {
        gulp.watch(paths.markupSrc, ['copyFiles']);
        gulp.watch(paths.styleSrc, ['copyFiles']);
        gulp.watch(paths.appSrc, ['copyFiles']);
        gulp.watch(paths.index, ['copyFiles']);
    });

    gulp.task('serve', ['copyFiles'], function() {
       return gulp.src(paths.build)
        .pipe(webserver({
            livereload: {
                enable: true,
                filter: function(fileName) {
                if (fileName.match(/.map$/)) { // exclude all source maps from livereload
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            fallback: 'index.html'
        }));
    });

    gulp.task('copyFiles', function () {
        
        var buildLibs = gulp.src(mainBowerFiles())
            .pipe(gulp.dest(paths.buildVendor));
            
        var appFiles = gulp.src(paths.appSrc)
            .pipe(angularFilesort())
            .pipe(ngAnnotate())
            .pipe(gulp.dest(paths.buildApp));
        
        var appStyles = gulp.src(paths.styleSrc)
            .pipe(sass.sync({
                outputStyle: 'compressed',
                errLogToConsole: true
            })).pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            })).pipe(gulp.dest(paths.buildStyles));
       
        var appImgs = gulp.src(paths.imgSrc)
            .pipe(gulp.dest(paths.buildImgs));

        var appMarkup = gulp.src(paths.markupSrc)
            .pipe(gulp.dest(paths.buildApp));

        return gulp.src(paths.index)
            .pipe(plumber())
            .pipe(gulp.dest(paths.build))
            .pipe(inject(appMarkup, {
                relative: true
            }))
            .pipe(inject(appImgs, {
                relative: true
            }))
            .pipe(inject(buildLibs, {
                relative: true,
                name: 'vendorInject'
            }))
            .pipe(inject(appStyles, {
                relative: true,
                name: 'stylesInject'
            }))
            .pipe(inject(appFiles, {
                relative: true
            }))
            .pipe(gulp.dest(paths.build));
    });

    gulp.task('clean', function () {
        del([paths.build]);
    });

}());