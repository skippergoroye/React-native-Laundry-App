import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cartItems.find((item) => item.id === action.payload.id);
      if(itemPresent){
        itemPresent.quantity++
      } else {
        state.cartItems.push({...action.payload, quantity:1})
      }
    },
    removeFromCart: (state, action) => {
       const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id)
       state.cartItems = removeItem
    },
    incrementQuantity: (state, action) => {
      const itemPresent = state.cartItems.find((item) => item.id === action.payload.id)
      itemPresent.quantity++;
    },
    decrementQuantity: (state, action) => {
       const itemPresent = state.cartItems.find((item) => item.id === action.payload.id)
       if(itemPresent.quantity = 1){
         itemPresent.quantity = 0;
         const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
         state.cart = removeItem
       } else {
        itemPresent.quantity--
       }
    }
  },
})



export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer