import {CREATE_NEW_DONG_DON_HANG} from '../Actions'

const initialState = {
    dongDonHang: []
}

export default (state = initialState, action) =>{
    console.log('chay reducer trong dong don hang', action.payload)
    switch (action.type) {
        case CREATE_NEW_DONG_DON_HANG:
            return {
                dongDonHang: state.dongDonHang.concat(action.payload.newDongHang)
            };
        default:
            return state;
    }
}