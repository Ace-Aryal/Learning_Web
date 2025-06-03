
import React from 'react'
type Proptye = {
    params: Promise<{ slug: string[] }>
}
async function Docs({ params }: Proptye) {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Intentional loading to test")
        }, 2000)
    })

    const { slug } = (await params)

    if (slug?.length === 2) {
        return (
            <div>Docs feature {slug[0]} concept {slug[1]}</div>
        )
    }
    if (slug?.length === 1) {
        return (
            <div>Docs feature {slug[0]} </div>
        )
    }
    console.log(slug)
    return (
        <div>Docs</div>
    )
}

export default Docs