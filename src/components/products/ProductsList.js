
import React, {useState} from 'react'
import { getProducts, PRODUCTS } from "./productsData";
import ProductCard from './ProductCard';
import Modal from '../modal/Modal';

const mystyle = {
    color: "white",
    display:'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  };

function ProductsList() {
    const products = getProducts()
    // console.log(products)
  
  return (
    <div style={mystyle}>
        {PRODUCTS.map( (product) => {
            // console.log(product)
            return <ProductCard  
                        key={product.id} 
                        product={product}
                        />
        } )}
    </div>
  )
}

export default ProductsList

