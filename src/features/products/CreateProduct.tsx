import { FormEvent, useCallback, useState, useRef } from "react";
import { createProduct } from "../../api";
import { useProductsActions } from "../../stores/productsSlice";

type Props = {
  shopId: string;
};

const AVAILABLE_QUANTITY = Array.from({ length: 10 }, (_, i) => i + 1);

export const CreateProduct = ({ shopId }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { add } = useProductsActions();
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const createdProduct = await createProduct(name, quantity, shopId);
        add(createdProduct);
        setName("");
        setQuantity(1);
        inputRef.current?.focus();
      } catch {}
    },
    [name, quantity, shopId, setName, inputRef]
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {AVAILABLE_QUANTITY.map((quantity) => (
          <option key={quantity}>{quantity}</option>
        ))}
      </select>
      <button type="submit" disabled={!name}>
        Create
      </button>
    </form>
  );
};
