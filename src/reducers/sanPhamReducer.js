import {CREATE_NEW_SANPHAM, CREATE_SAN_PHAM_SUCCESS} from '../Actions'
const initialState = {
    sanpham : []
}

export default (state = initialState, action) => {
    switch(action.type)
    {
        case CREATE_NEW_SANPHAM:
            {
                return {...state};
            }
        case CREATE_SAN_PHAM_SUCCESS:
            return{
                    sanpham: action.payload
                }
            default:
                let products = (JSON.parse(localStorage.getItem('sanPham')))
                return products ? {sanpham: products }: state
    }
            
        }

