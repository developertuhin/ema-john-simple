import React from 'react';

const Cart = (props) => {
    console.log(props);
    const cart = props.cart;

    // const totalPrice = cart.reduce((total,prod) => total+prod.price,0);
    // another way 
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
        total.toFixed(2);
    }
    let shipping = 0;
    if (total > 100) {
        shipping = 0;
    }
    else if (total > 35) {
        shipping = 4.99;
    }
    else if (total > 15) {
        shipping = 12.33;
    }
    
    let vat = (total / 10).toFixed(2);
    let grandTotal = ((total + shipping + Number(vat)).toFixed(2));
 return (
        <div>
           <h2>Order Summery</h2> 
           <p>Items Ordered : {cart.length}</p>
           <p>Product Price : {total}</p>
           <p><small>Shipping :$ {shipping}</small></p>
           <p><small>Vat :$ {vat}</small></p>
           <p>Total Price : $ {grandTotal}</p>
        </div>
    );
};

export default Cart;