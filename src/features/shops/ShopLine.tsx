import { useShopsSliceActions } from "../../stores/shopsSlice";
import { Shop } from "../../types";
import { removeShop, updateShopName } from "../../api";
import { useCallback } from "react";

type Props = {
  shop: Shop;
};

export const ShopLine = ({ shop }: Props) => {
  const { remove, handleSelection, updateName } = useShopsSliceActions();
  const handleRemove = useCallback(async () => {
    if (!window.confirm("Are you sure you want to remove it?")) return;
    try {
      await removeShop(shop.id);
      remove(shop.id);
    } catch {}
  }, [remove]);
  const changeSelection = useCallback(() => {
    handleSelection(shop.id);
  }, [handleSelection]);
  const handleNameUpdate = useCallback(() => {
    const newName = window.prompt("What's the correct name?", shop.name);
    if (!newName) return;
    updateShopName(shop.id, newName);
    updateName({ id: shop.id, name: newName });
  }, []);
  return (
    <li>
      <div className={`list-line ${shop.isSelected ? "selected" : ""}`}>
        {shop.name}
        <div className="cmd">
          <button type="button" onClick={handleRemove}>
            Delete
          </button>
          <button type="button" onClick={handleNameUpdate}>
            Rename
          </button>
          <button type="button" onClick={changeSelection}>
            Select
          </button>
        </div>
      </div>
    </li>
  );
};
