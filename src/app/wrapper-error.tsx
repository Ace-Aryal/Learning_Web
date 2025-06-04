"use client"

import React, { useState } from 'react'

function Wrapper() {
    const [error, setError] = useState(false)
    if (error) {
        throw new Error("Err in root layout")
    }
    return (
        <div>
            <button onClick={() => {
                setError(true)
            }}>Throw Error in root layout</button>
        </div>
    )
}

export default Wrapper