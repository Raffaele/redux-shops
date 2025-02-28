import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Shop } from "../types";
import { useActions } from "../hooks/useActions";

const initialState = {
  shops: [] as Shop[],
};

const shopsSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<Shop[]>) => {
      state.shops = action.payload;
    },
    add(state, action: PayloadAction<Shop>) {
      state.shops.push(action.payload);
    },
    updateName(state, action: PayloadAction<{ id: string; name: string }>) {
      const shop = state.shops.find((shop) => shop.id === action.payload.id);
      if (shop) {
        shop.name = action.payload.name;
      }
    },
    remove(state, action: PayloadAction<string>) {
      state.shops = state.shops.filter((shop) => shop.id !== action.payload);
    },
    handleSelection(state, action: PayloadAction<string>) {
      state.shops = state.shops.map((shop) => {
        return {
          ...shop,
          isSelected: shop.id === action.payload ? !shop.isSelected : false
        };
      })
    }
  },
});

export const { actions, reducer } = shopsSlice;

export const useShopsSliceActions = () => useActions(actions);