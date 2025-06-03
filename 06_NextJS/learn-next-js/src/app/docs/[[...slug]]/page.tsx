import React from 'react'

async function Docs({ params }: {
    params: Promise<{ slug: string[] }>

}) {
    const { slug } = (await params)
    if (slug?.length === 2) {
        return <div>Viewing docs for feature  {slug[0]} and concept {slug[0]}</div>
    }
    if (slug?.length === 1) {
        return <div>Viewing docs for feature  {slug[0]} </div>
    }
    return (
        <div>Docs Home page</div>
    )
}

export default Docs