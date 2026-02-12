

export const addProductToCart= (cart, productToAdd) => {
    const productExistsInCart= cart.find((item) => item.id === productToAdd.id);

    if(productExistsInCart) {
        return cart.map((item) =>
            item.id === productToAdd.id ? {
                ...item,
                qty: item.qty +1} 
                : item)
    }
    return [...cart, {...productToAdd, qty: 1}]
}


export const removeFromCart = (cart, productId) => {
    const productExistsInCart = cart.find((item) => item.id === productId);

    if (productExistsInCart.qty > 1) {
        return cart.map((item) =>
        item.id === productExistsInCart.id
        ? {...item, qty: item.qty - 1} 
        : item);
    }

    return cart.filter((item) => item.id !== productExistsInCart.id);
};


export const clearShipping = (cart, shipping) =>{
    if(cart.length === 1 && cart[0].qty === 1){
        return 0;
    }
    return shipping;

}