1. Reduccion de Peticiones HTTP

2. Minificacion de Archivos

  UglifyJs (https://github.com/mishoo/UglifyJS2)
  ------
    - npm install -g uglify-js
    - uglifyjs app.js -o app.min.js

  UglifyCss (https://www.npmjs.com/package/uglifycss)
  ------
    - npm install -g uglifycss

3. Utilizar un CDn (Content Delivery Network)
  - cloudflare (paid)
  - cdnjs.com

4. Cache

5. Gzip

------------------------

Gulp.js
-------
  - gulpjs.com
  - npm install -g gulp
  - npm install gulp --save-dev // install as dev-dependency

  - gulp-stylus

  - require('gulp') // main plugin
  - require('gulp-uglify')  // uglify files
  - require('gulp-changed') //  revisa fechas de modificacion de archivos
  - require('gulp-imagemin')  // image compressing
  - require('gulp-strip-debug') //  delete debugger references
  - require('gulp-minify-css')  // minify css
  - require('gulp-minify-html') //  minify html | delete whitespaces
  - require('gulp-browserify')  //  unificacion js files in one

  - gulp js //  run task
  - gulp  //  execute tasks on default
