import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";
import { useActions } from "../hooks/useActions";

const initialState = {
  products: [] as Product[],
};

const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    init: (state, { payload }: PayloadAction<Omit<Product, 'isSelected'>[]>) => {
      state.products = payload.map(partialProduct => ({ ...partialProduct, isSelected: false }));
    },
    add: (state, { payload }: PayloadAction<Product>) => {
      state.products.push(payload);
    },
    remove: (state, { payload }: PayloadAction<string>) => {
      const indexToRemove = state.products.findIndex(({ id }) => id === payload);
      if (indexToRemove === -1) return;
      state.products.splice(indexToRemove, 1);
    },
    updateName: (state, { payload }: PayloadAction<{ name: string, id: string }>) => {
      const productToUpdate = state.products.find(product => product.id === payload.id);
      if (!productToUpdate) return;
      productToUpdate.name = payload.name;
    },
    updateQuantity: (state, { payload }: PayloadAction<{ id: string, quantity: number }>) => {
      const productToUpdate = state.products.find(product => product.id === payload.id);
      if (!productToUpdate) return;
      productToUpdate.quantity = payload.quantity;
    }
  },
});

export const { actions, reducer } = productsSlice;
export const useProductsActions = () => useActions(actions);