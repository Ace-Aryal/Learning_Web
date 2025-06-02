

const ItemReviewPage = async ({ params, }: {
    params: Promise<{ productId: string, reviewId: string }>
}) => {
    const { productId, reviewId } = (await params)
    return (
        <div>review for {productId} is {reviewId}</div>
    )
}

export default ItemReviewPage