import { useAppSelector } from "../../stores";
import { ProductLine } from "./ProductLine";

type Props = {
  shopId: string;
};

export const ProductList = ({ shopId }: Props) => {
  const products = useAppSelector(
    (state) => state.productsSlice.products
  ).filter((product) => product.shopId === shopId);
  return (
    <ol>
      {products.map((singleProduct) => (
        <ProductLine key={singleProduct.id} product={singleProduct} />
      ))}
    </ol>
  );
};
