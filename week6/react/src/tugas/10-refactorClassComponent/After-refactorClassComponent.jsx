import React, { useState } from 'react'

function After() {
    const [count, setCount] = useState(0)

    const increment=()=>{
        setCount(count + 1)
    }

    const decrement=()=>{
        setCount(count - 1)
    }

    return (
        <div className="counter">
            <h2>Counter</h2>
            <div>
                <button onClick={decrement}>-</button>
                <span className="count">
                    {count}
                </span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default After;
