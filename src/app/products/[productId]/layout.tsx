import React from 'react'

function Layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <h2>Our product</h2>
            <div>
                {children}
            </div></div>
    )
}

export default Layout