import React, { useRef } from 'react'

function SimpleUseRef() {
    const dataInput = useRef()

    const showValue = () => {
        alert(`input contains: ${dataInput.current.value}`)
    }

    return (
        <div>
            <input type="text" ref={dataInput}/>
            <button onClick={showValue}>
                Alert the value!
            </button>
        </div>
    )
}

export default SimpleUseRef;