import React, { useState } from 'react'

const AfterStepCounter= () => {
    const [steps, setSteps] = useState(0)

    const stepsIncrement = () => {
        setSteps(steps + 1)
    }

    const stepsReset = () => {
        setSteps(0)
    }

    return (
        <div>
            <span aria-hidden>👟</span>
            <div>You've walked {steps} steps so far today.</div>
            <button onClick={stepsIncrement}>Record a Step</button>
            <button onClick={stepsReset}>Reset Step</button>
        </div>
    )
}

export default AfterStepCounter;