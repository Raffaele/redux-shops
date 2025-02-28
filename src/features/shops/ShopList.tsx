import { useAppSelector } from "../../stores";
import { ShopLine } from "./ShopLine";

export const ShopList = () => {
  const shops = useAppSelector((state) => state.shopsSlice.shops);
  return (
    <ol>
      {shops.map((singleShop) => (
        <ShopLine key={singleShop.id} shop={singleShop} />
      ))}
    </ol>
  );
};
