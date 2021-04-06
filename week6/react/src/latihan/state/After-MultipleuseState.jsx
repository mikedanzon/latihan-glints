import React, { useState } from 'react'

function AfterMultipleuseState() {
    const [water, setWater] = useState(0)
    const [coffee, setCoffee] = useState(0)

    const tambahWater = () =>{
        setWater(water + 1)
    }

    const tambahCoffe = () =>{
        setCoffee(coffee + 1)
    }

    return (
        <div>
            <h1>Coffee Maker</h1>
            <span aria-hidden>☕</span>
            <h2>Water : {water} oz</h2>
            <button onClick={tambahWater}>Event button Tambah air</button>
            <h2>Coffee : {coffee} gr</h2>
            <button onClick={tambahCoffe}>Event button Tambah Kopi</button>
        </div>
    )
}

export default AfterMultipleuseState;
