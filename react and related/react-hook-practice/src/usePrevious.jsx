import React, { useEffect, useRef, useState } from "react";

function App() {
  //   before useEffect
  //   after useEffect
  //   useEffect
  // useEffect 一直是render之后执行的，所以在render中的ref值总是落后一次
  let pre = useRef();
  const [state, setState] = useState(0);
  console.log("before useEffect");
  useEffect(() => {
    console.log("useEffect");
    pre.current = state;
  });
  console.log("after useEffect");

  return (
    <div onClick={() => setState(state + 1)}>
      <div>pre:{pre.current}</div>

      {"   "}
      <div>cur:{state}</div>
    </div>
  );
}

export default App;