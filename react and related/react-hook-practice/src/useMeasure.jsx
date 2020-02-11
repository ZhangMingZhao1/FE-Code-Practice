import React, { useState, useRef, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

export function useMeasure() {
  const ref = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => {
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return [{ ref }, bounds];
}

function App() {
  const [size, setSize] = useState(100);
  const Change = () => {
    setSize(300);
  };
  const [bind, { height: viewHeight }] = useMeasure();
  console.log(bind, viewHeight);
  return (
    <div
      style={{
        background: "blue",
        width: 200,
        height: size,
        transition: "height 1s ease-out"
      }}
      {...bind}
      onClick={Change}
    />
  );
}

export default App;
