export const addItemToCart = (cartItems, item) => {
    const existingCartItem= cartItems.find(cartItem => cartItem.id === item.id);
    if(existingCartItem) {
        return cartItems.map(cartItem =>
            (cartItem.id === item.id) ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }else{
        return [...cartItems, { ...item , quantity: 1 }]
    }
}
export const clearItemFromCart = (cartItems, item) => {
    return cartItems.filter((cartItem) => {
        return item.id !== cartItem.id;
    })
}
export const removeItemFromCart = (cartItems, item) => {
    const targetCartItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (targetCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== item.id)
    }else {
        return cartItems.map(cartItem => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem )
    }
}
