import React, { useEffect, useRef, useState } from 'react';

const After = (props) => {
    const [seconds, setSeconds] = useState(props.startTime)
    const timer = useRef()

    useEffect(() => {
        clearInterval(timer.current)
        setupCountdown(props.startTime)
    }, [props.startTime])

    useEffect(() => {
        if (seconds === 0) {
            clearInterval(timer.current)
        }
    }, [seconds])

    const setupCountdown = (startTime) => {
        setSeconds(startTime)
        if (startTime > 0) {
            timer.current = setInterval(() => {
                if (seconds > 0) {
                    setSeconds((prev) => prev - 1)
                } else {
                    clearInterval(timer.current)
                }
            }, 1000);
        }
    }

    return (
        <div>{seconds}</div>
    )
}

export default After;