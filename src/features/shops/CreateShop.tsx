import { useState, useCallback, type FormEvent, useRef } from "react";
import { useShopsSliceActions } from "../../stores/shopsSlice";
import { createShop } from "../../api";

export const CreateShop = () => {
  const { add } = useShopsSliceActions();
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const newShop = await createShop(name);
        add({ ...newShop, isSelected: false });
        setName("");
        inputRef.current?.focus();
      } catch {}
    },
    [name, setName, inputRef]
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
        ref={inputRef}
      />
      <button type="submit" disabled={!name}>
        Add
      </button>
    </form>
  );
};
