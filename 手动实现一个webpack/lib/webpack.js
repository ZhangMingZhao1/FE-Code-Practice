const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const path = require("path");
const { transformFromAst } = require("@babel/core");
module.exports = class Webpack {
  constructor(options) {
    // console.log(options);
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;

    this.modules = [];
  }
  run() {
    // console.log("hello webpack");
    const info = this.parse(this.entry);
    console.log(info);
    //!处理其他依赖模块，做一个信息汇总
    this.modules.push(info);
    for (let i = 0; i < this.modules.length; i++) {
      const item = this.modules[i];
      const { dependencies } = item;
      if (dependencies) {
        for (let j in dependencies) {
          this.modules.push(this.parse(dependencies[j]));
        }
      }
    }

    //! 数组结构转换
    const obj = {};
    this.modules.forEach(item => {
      obj[item.entryFile] = {
        dependencies: item.dependencies,
        code: item.code
      };
    });
    // console.log(obj);
    this.file(obj);
  }
  parse(entryFile) {
    //! 分析入口模块的内容
    const content = fs.readFileSync(entryFile, "utf-8");

    //! 分析出哪些是依赖？以及依赖的路径

    //把内容通过parse 抽象成语法树，便于分析 提取
    const ast = parser.parse(content, {
      sourceType: "module"
    });

    const dependencies = {};
    traverse(ast, {
      ImportDeclaration({ node }) {
        // console.log(node.source.value); //./expo.js => ./src/expo.js
        // console.log(path.dirname(entryFile));
        const newPathName =
          "./" + path.join(path.dirname(entryFile), node.source.value);
        dependencies[node.source.value] = newPathName;
      }
    });
    //! 处理内容 转换ast
    const { code } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"]
    });

    return {
      entryFile,
      dependencies,
      code
    };
  }
  file(code) {
    //! 生成bundle.js => ./dist/main.js
    const filePath = path.join(this.output.path, this.output.filename);
    // console.log(filePath);
    const newCode = JSON.stringify(code);
    const bundle = `(function(graph){
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
        require('${this.entry}') //./src/index
    })(${newCode})`;

    fs.writeFileSync(filePath, bundle, "utf-8");
  }
};
