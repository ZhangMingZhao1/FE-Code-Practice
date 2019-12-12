import React from "react";
import ReactDOM from "react-dom";
// import a from "./ES_Module";
// import * as b from "./ES_Module";
// import { c } from "./ES_Module";
// const dd = require("./common_js");

import dd from "./ES_Module1";
function App() {
  /**
   * 测试1
   */
  // console.log("a,b,c", a, b, c);
  // console.log(typeof b);
  // console.log(b.default, b.c, b.d, b.e);
  // console.log("dd", dd);
  /**
   * 测试2
   */
  // console.log(dd);
  return <div className="App">{dd}</div>;
}
ReactDOM.render(<App />, document.getElementById("root"));
