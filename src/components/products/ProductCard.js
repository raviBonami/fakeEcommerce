// npm install @material-ui/core
// npm install @material-ui/icons

import React, { useState, useRef } from 'react'
import '../styles/productCard.css'
import Modal from '../modal/Modal'
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from '@mui/icons-material/StarHalf';

function ProductCard({ product }) {
    // console.log(product.id)

    const [modal, setModal] = useState(false)
    const [activeStar, setActiveStar] = useState(-1)

    const ratingContainerRef = useRef(null);

    const openModalHandler = () => {
        setModal(true)
    }

    const closeModalHandler = () => {
        setModal(false)
    }

    const starRating = (rating) => {
        const totalStars = 5;
        let activeStars = rating;
        let halfStars = 0;

        if(rating % 1 != 0){
            activeStars = Math.floor(rating)
            halfStars = 1;
        }

        return (
                <Box>
                {[...new Array(totalStars)].map((arr, index) => {
                  return index < activeStars ? <StarIcon /> : index=== activeStars ? <StarHalfIcon /> : <StarBorderIcon />;
                })}
              </Box>
            // <Box
            //     sx={{
            //         display: "inline-flex",
            //         position: "relative",
            //         cursor: "pointer",
            //         textAlign: "left",
            //     }}
            // >
            //     {[...new Array(totalStars)].map((arr, index) => {
            //         return (
            //             <Box ref={ratingContainerRef} position="relative">
            //                 <Box sx={{ 
            //                         width: index <= activeStar ? "100%" : "0%", 
            //                         overflow: "hidden", 
            //                         position: "absolute" }}>
            //                     <StarIcon />
            //                 </Box>
            //                 <Box>
            //                     <StarBorderIcon />
            //                 </Box>
            //             </Box>
            //         );
            //     })}
            // </Box>
        )
}



return (
    <>
        {modal && <Modal closeModalHandler={closeModalHandler} product={product} />}
        <div className='product-container' >
            {/* <div className='product-individual-container' > */}
            <div className='product-heading' >
                <h2>Product ID: {product.id}: {product.name}</h2>
            </div>
            <div className='product-image'>
                <img src={product.img} />
            </div>
            <div className='product-rating' >
                <p>Rating : <strong> {starRating(product.rating)}</strong></p>
            </div>
            <div className='product-price' >
                <p>Price: <strong>{product.price}</strong></p>
            </div>
            <div className='product-seller' >
                <div>
                    <span>Seller Name</span>
                    <h3>{product.seller}</h3>
                </div>
                <div>
                    <img src={product.sellerImg} />
                </div>
            </div>
            <div className='product-button' >
                <button onClick={openModalHandler} >View Product</button>
            </div>

            {/* </div> */}
        </div>
    </>

)
}


// const cartItems = (
//     <ul className={classes['cart-items']}>
//       {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
//         <li>{item.name}</li>
//       ))}
//     </ul>
//   );

//   return (
//     <Modal>
//       {cartItems}
//       <div className={classes.total}>
//         <span>Total Amount</span>
//         <span>35.62</span>
//       </div>
//       <div className={classes.actions}>
//         <button className={classes['button--alt']}>Close</button>
//         <button className={classes.button}>Order</button>
//       </div>
//     </Modal>
//   );

<div className='card' >
    <div className='card-body'>
        <img src="" />
        <h2 className='card-title' >Product 1</h2>
        <p className='card-description' >Fridge</p>
    </div>
    <button className='card-button' >View Product</button>
</div>

/*


*/

export default ProductCard

// id: 1,
//         name: 'Product1',
//         img:"",
//         rating: 10,
//         price: 100,
//         seller: '',
//         sellerImg: ''