import React from 'react'
import Navbar from '../source/navbar/Navbar'
import {useSelector, useDispatch} from 'react-redux'
import '../styles/cartStyle.css'

function Cart() {
  const cartState = useSelector(state => state)
  console.log(cartState)
  let totalAmount = 0;
  return (
    <div>
      <Navbar />
      <h1 style={{color:'white'}} >Ordered Items</h1>
      <div>
        {cartState.map( (item) => {
          totalAmount += (item.price * item.quantity);
          return (
            <div key={item.id} className='cart' >
              <div className='cart-header' >
                <h2>{item.id}  {item.name}</h2>
              </div>
              <div className='cart-image' >
                <img src={item.img} />
              </div>
              <div className='cart-details' >
                <p>Item Rating: {item.rating}</p>
                <p>Item Price: {item.price}</p>
              </div>
              <div className='cart-seller' >
                <p>Seller Name: {item.seller}</p>
                <img src={item.sellerImg} />
              </div>
              <div className='cart-quantity' >
                <p>Quantity: {item.quantity}</p>
              </div>
              <div>
                <h3>Product Amount: {item.quantity*item.price}</h3></div>
            </div>
            
          
          )
        })}
      </div>
      <h2 style={{color:'white'}} >Total Amount: {totalAmount}</h2>
      {cartState.length > 0 ? <button className='order-button' >Order Now</button>:null}
    </div>
  )
}

export default Cart

// {
//   id: 3,
//   name: 'Microwave',
//   img:microwave,
//   rating: 7,
//   price: 15000,
//   seller: "Tim Howard",
//   sellerImg:microwaveSeller,
//   quantity: 0
// }