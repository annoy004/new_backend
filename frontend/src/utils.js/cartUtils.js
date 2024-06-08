 export const addDecimal = (num) => {
    return (Math.round(num* 100) /100).toFixed(2); // for two decimal place we can write to fixed
}

export const updateCart = (state) => {
      //calculate items price
      state.itemsPrice = addDecimal(state.cartItems.reduce((acc,item) => acc + item.price * item.qty,0))// the zero is the default for accumulator
      //calculate shipping price (if order is over $ 100 then free ,else $10shipping)
      state.shippingPrice = addDecimal(state.itemsPrice > 100 ? 0 : 10);
      //calculate tax price(15 % tax)
      state.taxPrice = addDecimal(Number((0.15 * state.itemsPrice).toFixed(2)));
      //calculate total price

      state.totalPrice = (
          Number(state.itemsPrice) + 
          Number(state.shippingPrice) + 
          Number(state.taxPrice)
      ).toFixed(2);
      
      localStorage.setItem('cart',JSON.stringify(state));
      return state;
}
