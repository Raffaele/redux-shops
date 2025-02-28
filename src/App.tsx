import { useEffect } from "react";
import { getAll } from "./api";
import { useShopsSliceActions } from "./stores/shopsSlice";
import { useProductsActions } from "./stores/productsSlice";
import { Shops } from "./features/shops/Shops";
import { Products } from "./features/products/Products";

function App() {
  const { init: initShops } = useShopsSliceActions();
  const { init: initProducts } = useProductsActions();

  useEffect(() => {
    getAll("products").then(initProducts);
  }, [initProducts]);

  useEffect(() => {
    getAll("shops").then(initShops);
  }, [initShops]);

  return (
    <div>
      <h1>Shop list</h1>
      <Shops />
      <Products />
    </div>
  );
}

export default App;
