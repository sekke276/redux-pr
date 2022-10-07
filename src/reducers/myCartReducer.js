import {ADD_TO_CART, CLEAR_CART, TAKE_SANPHAM} from '../Actions';

const initialState ={
    cart : [
      
   ]
}

export default (state = initialState, action) =>{
    switch(action.type)
    {
        case ADD_TO_CART:
            console.log('add to cart reducer',state)
            let i = state.cart.findIndex(item => item._id === action.payload._id )
            if(i >=0)
            {
                let item = state.cart.find(e => e._id === action.payload._id)
                item.soLuong = parseInt(item.soLuong) + parseInt(action.payload.soLuong);
                state.cart[i] = item;
                return {
                    ...state.cart,
                    cart : [ ...state.cart]
                }
            }
            else
            {
                return{
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }
        case TAKE_SANPHAM:
            return state
        case CLEAR_CART:
            return{
                cart: []
            }
        default:
            return state;
    }
}