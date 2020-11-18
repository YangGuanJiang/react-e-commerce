import {CartActionTypes} from './cart.types';

export const toggleCartHidden  = () => ({
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    })
export const addCartItem  = (cartItem) => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: cartItem
})
export const clearCartItem  = (cartItem) => ({
    type: CartActionTypes.CLEAR_CART_ITEM,
    payload: cartItem
})
export const removeCartItem  = (cartItem) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: cartItem
})
