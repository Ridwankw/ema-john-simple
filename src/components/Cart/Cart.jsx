import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart; //option 1
    // const {cart} = props; //option 2

    //console.log();

    let total = 0;
    let totalShipping = 0;
    let tax = 0;
    let grandTotal= 0;
// console.log(cart);
    if (Array.isArray(cart)){
    for(const product of cart){
        total = total + product?.price;
        totalShipping = totalShipping + product?.shipping
    }
     tax = total*7/100;
     grandTotal =total + totalShipping + tax; 
    

    }
    return (
        <div className='cart'>
          <h3>card Items</h3>
            <p>Selected Items: {cart.length}</p> 
            <p>Total Price : ${total}</p> 
            <p>Total Shipping : %{totalShipping}</p> 
            <p>Tex : {tax.toFixed(2)}</p> 
            <h6>Grand Total : {grandTotal.toFixed(2)}</h6> 
        </div>
    );
} 


export default Cart;