
import { redirect } from "next/navigation";
type Props = {
  params: Promise<{ productId: string, reviewId: string }>,
};
const getRandom = (num: number): number => {
  return Math.floor(Math.random() * num)
}

async function ProductDetail({ params }: Props) {

  if (getRandom(2) === 1) {
    throw new Error("App breaking Error")
  }



  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    // notFound()
    redirect("/products")
  }
  return <div>Product Id {productId} and review id {reviewId}</div>;
}

export default ProductDetail;
