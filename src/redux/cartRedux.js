import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    qty: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.qty += 1
      state.products.push(action.payload)
      state.total += action.payload.price * action.payload.quantity
    },
    emptyCart: (state) => {
      state.qty = 0
      state.products = []
      state.total = 0
    },
  },
})

export const { addProduct, emptyCart } = cartSlice.actions
export default cartSlice.reducer
