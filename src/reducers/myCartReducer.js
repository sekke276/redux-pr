import {ADD_NEW_TO_CART, ADD_TO_CART, CLEAR_CART,  UPDATE_PRODUCT} from '../Actions';

const initialState ={
    cart : [
    
    ]
}

export default (state = initialState, action) =>{
    switch(action.type)
    {
        case ADD_TO_CART:
            return{...state}
        case UPDATE_PRODUCT:
            return{
                cart: action.payload
            }
        case ADD_NEW_TO_CART:
            return{
                cart: [...state.cart, action.payload]
            }
        case CLEAR_CART:
            return{
                cart: []
            }
        default:
            return state;
    }
}