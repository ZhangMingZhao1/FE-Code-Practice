import React, { useEffect, useRef, useState } from "react"
/**
 * 
 * 当你连续点击时，你会发现这串数字在发生抖动。
原因在于，当你每次点击 div， count 会更新为 0， 之后 useEffect 内又把 count 改为一串随机数。
所以页面会先渲染成0，然后再渲染成随机数，由于更新很快，所以出现了闪烁。
 * 相比使用 useEffect，当你点击 div，count 更新为 0，此时页面并不会渲染，而是等待 useLayoutEffect 内部状态修改后，才会去更新页面，所以页面不会闪烁。
 */
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count === 0) {
      const randomNum = 10 + Math.random() * 200
      setCount(10 + Math.random() * 200)
    }
  }, [count])

  return (
    <div style={{ userSelect: "none" }} onClick={() => setCount(0)}>
      {count}
    </div>
  )
}

export default App
