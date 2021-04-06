import React, {useState} from 'react'

export const AfterClass = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    setCount(count-1);
  }

  const reset = () => {
    setCount(0)
  }

  return(
    <div>
        <p>Clicked {count} times</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset Count</button>
    </div>
  )
}