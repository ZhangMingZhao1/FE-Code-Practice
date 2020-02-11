(function(graph){
        function require(module){
            function localRequire(relativePath){
               
               return require( graph[module].dependencies[relativePath])
            }
            var exports={};
            (function(require,exports,code){
              console.log('ddd',code);
                eval(code)
            })(localRequire,exports,graph[module].code)
            
            return exports;
        }
        require('./src/index.js') //./src/index
    })({"./src/index.js":{"dependencies":{"./expo.js":"./src/expo.js"},"code":"\"use strict\";\n\nvar _expo = require(\"./expo.js\");\n\n(0, _expo.add)(1, 2);\nconsole.log(\"hello webpack\");"},"./src/expo.js":{"dependencies":{"./test.js":"./src/test.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.minus = exports.add = void 0;\n\nvar _test = require(\"./test.js\");\n\nvar add = function add(a, b) {\n  return a + b;\n};\n\nexports.add = add;\n\nvar minus = function minus(a, b) {\n  return a - b;\n};\n\nexports.minus = minus;"},"./src/test.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.test = void 0;\n\nvar test = function test() {\n  console.log(\"test\");\n};\n\nexports.test = test;"}})