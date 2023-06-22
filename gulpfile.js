const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
//pacote responsável por integrar o sass com o gulp
//pacote responsável pela compilação do sass
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagem() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJS() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss') //pega os arquivos fonte
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed' //minifica o arquivo
        })) //executa a compilação do sass
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles')); //indica o destino
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', gulp.series(comprimeJS));
    gulp.watch('./source/images/*', gulp.series(comprimeImagem));
}