import {CREATE_NEW_DONG_DON_HANG} from '../Actions'

const initialState = {
    dongDonHang: []
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_NEW_DONG_DON_HANG:
            let newDongDonHang =  state.dongDonHang.concat(action.payload.newDongHang) 
            localStorage.setItem('dongDonHang',JSON.stringify(newDongDonHang))
            return {
                ...state.dongDonHang,
                dongDonHang: newDongDonHang 
            };
        default:
            let orders = (JSON.parse(localStorage.getItem('dongDonHang')))
                return orders ? {dongDonHang: orders }: state;
    }
}