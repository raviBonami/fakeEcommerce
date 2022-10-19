
import { PRODUCTS } from "../components/products/productsData";

const initialState = [];
const cartState = []

const ReducerFunction = (state = initialState,action) => {
    // console.log(action)
    // console.log(state)
    switch(action.type){
        case `ADD`:
            console.log('inside add', action)
          action.payload.clickedProduct.quantity += action.payload.quantity;
          return [...state,action.payload.clickedProduct]
            
        case `REMOVE`:
            // console.log(action)
            // const updatedState = state.concat(action.payload)
            let newIndex = -1;
            for(let i=0;i<state.length;i++){
                if(action.payload.id === state[i].id){
                    newIndex = i;
                }
            }
            if(newIndex > -1 && action.payload.quantity>0){
                action.payload.quantity--;
                return [...state]
            }else{
                return [...state]
            }
        default:
            return state;
    }
}

export default ReducerFunction


















  // const existingCartItemIndex = state.findIndex((item) => (
            //     item.id === action.payload.id
            // ))

            // let existingCartItem;
            // if(existingCartItemIndex){
            //     existingCartItem = state[existingCartItemIndex]
            // }
            // let updatedState;
            // updatedState.filter((existingCartItem) => (
            //     existingCartItem.id !== action.payload.id
            // ))
            // return {
            //     state: updatedState
            // }









            // let index = -1;
            // for(let i=0;i<state.length;i++){
            //     if(action.payload.id === state[i].id){
            //         index = i;
            //     }
            // }
            // if(index > -1){
            //     action.payload.quantity++;
            //     return [...state]
            // }else{
            //     action.payload.quantity++;
            //     return [...state,action.payload]
            // }

