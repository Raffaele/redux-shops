import { useState, useCallback, type FormEvent } from "react";
import { Product } from "../../types";
import { useProductsActions } from "../../stores/productsSlice";
import { removeProduct, updateProduct } from "../../api";

type Props = {
  product: Product;
};

const AVAILABLE_QUANTITY = Array.from({ length: 10 }, (_, i) => i + 1);

export const ProductLine = ({ product }: Props) => {
  const [isChangeQuantityActive, setIsChangeQuantityActive] = useState(false);
  const [quantity, setQuantity] = useState(product.quantity);
  const { remove, updateName, updateQuantity } = useProductsActions();
  const handleRemove = useCallback(async () => {
    if (!window.confirm("Are you sure you want to remove the product?")) return;
    try {
      await removeProduct(product.id);
      remove(product.id);
    } catch {}
  }, [remove]);
  const handleRename = useCallback(async () => {
    const name = window.prompt("Inser the new product name", product.name);
    if (!name) return;
    try {
      updateProduct(product.id, { ...product, name });
      updateName({ id: product.id, name });
    } catch {}
  }, []);
  const handleQuantityChange = useCallback(
    async (e: FormEvent<HTMLFormElement>, product: Product) => {
      e.preventDefault();
      try {
        await updateProduct(product.id, { ...product, quantity });
        updateQuantity({ id: product.id, quantity });
        setIsChangeQuantityActive(false);
      } catch {}
    },
    [quantity]
  );
  return (
    <li>
      {isChangeQuantityActive ? (
        <>
          <button
            type="button"
            onClick={() => setIsChangeQuantityActive(false)}
          >
            Cancel
          </button>
          <form
            onSubmit={(e) => handleQuantityChange(e, product)}
            className="inline-form"
          >
            <select
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
            >
              {AVAILABLE_QUANTITY.map((quantity) => (
                <option key={quantity}>{quantity}</option>
              ))}
            </select>
            <button type="submit">OK</button>
          </form>
        </>
      ) : (
        <>
          <button type="button" onClick={() => handleRemove()}>
            Delete
          </button>
          <button type="button" onClick={() => handleRename()}>
            Rename
          </button>
          <button type="button" onClick={() => setIsChangeQuantityActive(true)}>
            Change quantity
          </button>
        </>
      )}
      {product.name}({product.quantity})
    </li>
  );
};
