import React from 'react';

const Cart = (props) => {
    console.log(props);
    const cart = props.cart;

    // const totalPrice = cart.reduce((total,prod) => total+prod.price,0);
    // another way 
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price

    }
    return (
        <div>
           <h2>Order Summery</h2> 
           <p>Items Ordered : {cart.length}</p>
           <p>Total Price : $ {total}</p>
        </div>
    );
};

export default Cart;