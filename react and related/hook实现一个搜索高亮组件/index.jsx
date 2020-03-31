import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState(null);
  const [resDom, setResDom] = useState([]);
  const arr = ["4444", "2222", "4442233", "3334444", "221133"];
  const handleChange = e => {
    const val = e.target.value;
    setVal(val);
    // console.log(val);
    let tmp = [];
    for (let item of arr) {
      if (item.toString().indexOf(val) !== -1) {
        tmp.push(item);
      }
    }
    console.log(tmp);
    setResDom(tmp);
  };

  return (
    <div className="App">
      <div>高亮组件</div>
      <input onChange={handleChange} />
      {resDom.map(item => {
        const cur = item.indexOf(val);
        const left = item.substr(0, cur);
        const right = item.substr(cur + val.length);
        console.log(left, val, right);
        return (
          <div key={item}>
            {left}
            <span style={{ color: "red" }}>{val}</span>
            {right}
          </div>
        );
      })}
    </div>
  );
}
