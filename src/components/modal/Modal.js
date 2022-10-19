
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '../styles/modal.css'
import '../styles/modalOverlay.css'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cart from '../cart/Cart'

const Backdrop = () => {
    return (
        <div className='backdrop' ></div>
    )
}

const ModalOverlay = ({ props, closeModalHandler }) => {

    
    // console.log(props.product)
    const navigator = useNavigate();
    const clickedProduct = props.product;
    const [quantity, setQuantity] = useState(0)
    const numOfProduct = useSelector((state) => state)
    const dispatch = useDispatch()
    console.log(numOfProduct)

    const findIndex = (clickedProduct) => {
        for(let i=0;i<numOfProduct.length;i++){
            if(clickedProduct.id === numOfProduct[i].id){
                return numOfProduct[i]
            }
        }
    }

    const productQuantity = findIndex(clickedProduct) || 0;
    // console.log('prod ', productQuantity)
    const addProductHandler = (product) => {
        // console.log(numOfProduct)
        closeModalHandler();
        return dispatch({type: `ADD`,payload:product})
    }

    const removeProductHandler = (product) => {
        // console.log(product)
        return dispatch({type: `REMOVE`,payload:product})
    }

    const numOfCurrProducts = (clickedProduct) => {
        let quantity;
        for(let i=0;i<numOfProduct;i++){
            if(numOfProduct[i].id === clickedProduct.id){
                quantity++;
            }
        }
        return quantity
    }


    return (
        <div className='modal' >
            <div>{props.children}</div>
            <div className='modal-header' >
                <h1>{clickedProduct.id} : {clickedProduct.name}</h1>
            </div>

            <div className='modal-image-product' >
                <img src={clickedProduct.img} />
            </div>
            <div className='modal-quantity' >
                
                    <button onClick={() => setQuantity(prev => prev > 0 ? prev-1:0)} >-</button>
                    <div>
                        <p>{quantity}</p>
                    </div>
                    <button onClick={() => setQuantity(prev => prev+1)} >+</button>
                
            </div>
            <div className='modal-product-options' >
                <div>
                    <button onClick={closeModalHandler} >Close</button>
                </div>
                <div>
                    <button onClick={() => addProductHandler({clickedProduct,quantity})} >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

const portalRoot = document.getElementById('modal-root')

const Modal = (props) => {
    // console.log(props)
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalRoot)}
            {ReactDOM.createPortal(<ModalOverlay closeModalHandler={props.closeModalHandler} props={props} >{props.children}</ModalOverlay>, portalRoot)}
        </>
    )
}

export default Modal