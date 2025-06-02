const ProductItem = async ({ params, }: {
  params: Promise<{ productId: string }>
}) => {
  const productId = (await params).productId
  return <div>ProductItem {productId}</div>;
};

export default ProductItem;
