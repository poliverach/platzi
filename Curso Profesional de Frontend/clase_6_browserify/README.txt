Globals
-------
  // Definition
  var MyModule = function() { ... };
  // Require (Not needed, its global!)

  // Use
  MyModule();

AMD (Asynchronous Module Definition)
------------------------------------
  - requirejs.org

  // Definition
  define['my-dependency'], function(MyDependency) {
    return function() {};
  }
  // Require & Use
  require['my-dependency'], function(MyDependency) {
    MyDependency();
  }

CommonJs
--------
  - browserify.org

  // Definition
  module.exports = function() {};
  // Require
  var MyDependency = require('my-dependency');
  // Use
  MyDependency();

Browserify
----------
  - npm install -g browserify
  - npm ls // list dependencies
  - npm run bundle // execute command in package.json
