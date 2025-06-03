import { Metadata } from 'next'
import React from 'react'

type Props = {
    params: Promise<{ productId: string }>
}
export const generateMetadata = async ({ params, }: Props): Promise<Metadata> => {
    const { productId } = (await params)
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Iphone ${productId}`)
        }, 100)
    })
    return {
        title: `product ${title}`
    }

}
async function ProductDetail({ params }: Props) {
    const { productId } = (await params)
    return (
        <div>Product Id {productId}</div>
    )
}

export default ProductDetail