import {ADD_TO_CART, TAKE_SANPHAM} from '../Actions';

const initialState ={
    cart : [
       {
        _id: 2,
        ten: 'Laptop ASUS',
        hinh: 'https://fptshop.com.vn/Uploads/Originals/2021/3/3/637503832634005581_asus-vivobook-x515-print-bac-dd.jpg',
        gia: 1000,
        thue: 100, 
        soLuong: 2,
    } ,
  {
        _id: 5,
        ten: 'Laptop DELL',
        hinh: 'https://fptshop.com.vn/Uploads/Originals/2021/3/3/637503832634005581_asus-vivobook-x515-print-bac-dd.jpg',
        gia: 1000,
        thue: 100, 
        soLuong: 3,
    } 
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
        default:
            return state;
    }
}