/* Gulp configuration */
var gulp = require('gulp'),
    plugin = require('gulp-load-plugins')(),
    clean = require('del'),
    config = {
        dist: './dist',
        src: './src',
        test: './test'
    };

/* Task declarations */
gulp
    .task('clean', cleanTask)
    .task('jasmine', ['build'], jasmineTask)
    .task('typescript', ['clean'], typescriptTask)
    .task('tslint', tslintTask)
    .task('tslint:src', tslintSrcTask)
    .task('tslint:test', tslintTestTask)
    .task('build', ['typescript'])
    .task('test', ['jasmine']);

/* Task definitions */
function cleanTask() {
    return clean([config.dist + '/**', '!' + config.dist]);
}

function jasmineTask() {
    return gulp
        .src(config.dist + '/test/**/*.spec.js')
        .pipe(plugin.jasmine());
}

function typescriptTask() {
    var tsProject = plugin.typescript.createProject('./tsconfig.json'),
        tsResult = tsProject.src().pipe(tsProject());

    return tsResult.js
        .pipe(gulp.dest(config.dist));
}

function tslintTask(path) {
    path = typeof path === 'string' ? path : './{src,test}';

    return gulp
        .src(path + '/**/*.ts')
        .pipe(plugin.tslint({formatter: 'verbose'}))
        .pipe(plugin.tslint.report());
}

function tslintSrcTask() {
    return tslintTask(config.src);
}

function tslintTestTask() {
    return tslintTask(config.test);
}
