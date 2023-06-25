import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productItems:[],
}

export const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        getProducts:(state,action) => {
            state.productItems.push({...action.payload});
        },
        incrementQty:(state,action) => {
            const itemPresent = state.productItems.find((item) => item.id === action.payload.id);
            itemPresent.quantity++;
        },
        decrementQty:(state,action) => {
            const itemPresent = state.productItems.find((item) => item.id === action.payload.id);
            if(itemPresent.quantity == 1){
                itemPresent.quantity = 0;
                const removeItem = state.productItems.filter((item) => item.id !== action.payload.id);
                state.cartItems = removeItem;
            }else{
                itemPresent.quantity--;
            }
        }
    }
});

export const {getProducts, incrementQty, decrementQty} = productSlice.actions;

export default productSlice.reducer;