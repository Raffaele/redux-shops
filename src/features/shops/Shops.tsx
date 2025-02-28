import { CreateShop } from "./CreateShop";
import { ShopList } from "./ShopList";

export const Shops = () => {
  return (
    <fieldset>
      <legend>Shop</legend>
      <CreateShop />
      <ShopList />
    </fieldset>
  );
};
