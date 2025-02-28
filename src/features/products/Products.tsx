import { useAppSelector } from "../../stores";
import { CreateProduct } from "./CreateProduct";
import { ProductList } from "./ProductList";

export const Products = () => {
  const shops = useAppSelector((state) => state.shopsSlice.shops);
  const selectedShop = shops.find((singleShop) => singleShop.isSelected);

  if (!selectedShop) return null;
  return (
    <fieldset>
      <legend>Products</legend>
      <CreateProduct shopId={selectedShop.id} />
      <ProductList shopId={selectedShop.id} />
    </fieldset>
  );
};
