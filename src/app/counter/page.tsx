import React from 'react'
import { Metadata } from 'next'
export const metadata: Metadata = {
    title: "Counter",
    description: "Default"
}
import Counter from "../../Components/Counter"

const CounterPage = () => {
    return (
        <Counter />
    )
}

export default CounterPage