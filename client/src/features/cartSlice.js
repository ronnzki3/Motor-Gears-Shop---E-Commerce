import {createSlice} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const initialState={
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQTy: 0,
    cartTotalAmount: 0,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const itemIndex=state.cartItems.findIndex(
                (item)=>item.id===action.payload.id
            );
            if(itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity +=1;
                toast.info(`Added ${state.cartItems[itemIndex].name} quantity`,{
                    position:"top-right",
                });
            }else{
                const tempProduct={...action.payload, cartQuantity:1};
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.name} added to cart`,{
                    position:"top-right",
                });
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
            
        },
        removeFromCart(state,action){
            const itemsLeftInCart = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            );
            state.cartItems=itemsLeftInCart;            
            toast.error(`${action.payload.name} removed from cart`,{
                position:"top-right",
            });
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        decreaseCartQty(state,action){
            const itemIndex=state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            );

            if(state.cartItems[itemIndex].cartQuantity>1){
                state.cartItems[itemIndex].cartQuantity -=1;                
            }else if(state.cartItems[itemIndex].cartQuantity ===1){
                const itemsLeftInCart = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                );
                state.cartItems=itemsLeftInCart;                
                toast.error(`${action.payload.name} removed from cart`,{
                    position:"top-right",
                });                
                localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
            }
        },
        addCartQty(state,action){
            const itemIndex=state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            );
            state.cartItems[itemIndex].cartQuantity +=1;    
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        clearCart(state,action){
            state.cartItems=[];            
            toast.error(`Cart cleared.`,{
                position:"top-right",
            });
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        }
    },
});


export const { addToCart, removeFromCart, decreaseCartQty, addCartQty, clearCart } = cartSlice.actions;

export default cartSlice.reducer;