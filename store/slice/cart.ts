import { ImageSourcePropType } from "react-native";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DummyData } from "../../data/dummyData";

export type CartState = {
  cart: Array<{
    id: number;

    quantity: number;
    title: string;
  }>;
};

const CartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [
      { id: 0, quantity: 1, title: DummyData[0].title },
      { id: 1, quantity: 3, title: DummyData[2].title },
    ],
  } as CartState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        id: number;
        quantity: number;
        title: string;
      }>
    ) => {
      console.log("👺👺👺", action.payload);
      if (state.cart.some((cart) => cart.id === action.payload.id)) {
        console.log("hererere");
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cart[index] = {
          id: action.payload.id,
          title: action.payload.title,
          quantity: state.cart[index].quantity + 1,
        };
        return;
      }

      state.cart = [...state.cart, action.payload];
    },
    increaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[index] = {
        id: state.cart[index].id,
        title: state.cart[index].title,
        quantity: state.cart[index].quantity + 1,
      };
    },
    decreaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cart[index] = {
        id: state.cart[index].id,
        title: state.cart[index].title,
        quantity: state.cart[index].quantity - 1,
      };
    },
    deleteFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const updatedCart = state.cart.filter(
        (cart) => cart.id !== action.payload.id
      );
      state.cart = updatedCart;
    },
  },
});

export default CartSlice.reducer;
export const { addToCart, increaseQuantity, decreaseQuantity, deleteFromCart } =
  CartSlice.actions;
