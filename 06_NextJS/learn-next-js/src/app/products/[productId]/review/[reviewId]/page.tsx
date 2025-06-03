import { notFound } from "next/navigation"
const ItemReviewPage = async ({ params, }: {
    params: Promise<{ productId: string, reviewId: string }>
}) => {
    const { productId, reviewId } = (await params)
    if (parseInt(reviewId) > 1000) {
        notFound()
    }
    return (
        <div>review for {productId} is {reviewId}</div>
    )
}

export default ItemReviewPage