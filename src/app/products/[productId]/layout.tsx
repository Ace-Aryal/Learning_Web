import React from 'react'
const getRandom = (num: number): number => {
    return Math.floor(Math.random() * num)
}
function Layout({ children }: {
    children: React.ReactNode
}) {
    if (getRandom(2) === 1) {
        throw new Error("Layout breaking Error")
    }

    return (
        <div>
            <h2>Our product</h2>
            <div>
                {children}
            </div></div>
    )
}

export default Layout