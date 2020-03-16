import React, { useEffect, useRef, useState } from "react"

function App() {
  //   before useEffect
  //   after useEffect
  //   useEffect
  // useEffect 一直是render之后执行的，相当于Did的生命周期，对标DidMount和DidUpdate，先render渲染，再执行Did 所以在我们先看到的是render的未赋值的ref.current, 后被赋值。
  let pre = useRef()
  const [state, setState] = useState(0)
  console.log("before useEffect")
  useEffect(() => {
    console.log("useEffect")
    pre.current = state
  })
  console.log("after useEffect")

  return (
    <div onClick={() => setState(state + 1)}>
      <div>pre:{pre.current}</div>

      {"   "}
      <div>cur:{state}</div>
    </div>
  )
}

export default App
