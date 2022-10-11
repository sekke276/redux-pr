import {delay, put, takeLeading, select} from 'redux-saga/effects';
import { CREATE_NEW_DONG_DON_HANG, CREATE_NEW_DON_HANG, CLEAR_CART } from '../Actions';

export default function* watcherDongDongHang()
{
    yield takeLeading(CREATE_NEW_DONG_DON_HANG, workerAddDonDongHang);
}

function* workerAddDonDongHang(action)
{
    try{
        const cart = yield select(state => state.myCartReducer.cart)
        const donHang = yield select(state => state.donHangReducer.order);
        const tongThue =  cart.reduce((sum,curr) => sum + (parseInt(curr.thue) * curr.soLuong),0)
        const tongTruocThue =  cart.reduce((sum,curr) => sum + (curr.gia * curr.soLuong) , 0 )
        const newDonHang = {
            id: 'DH' + donHang.length,
            ten: 'DH' + (new Date()).getTime(),
            tongTruocThue: tongTruocThue,
            tongThue: tongThue, 
            tongTien: tongTruocThue + tongThue,
        }
        const newdontHang = donHang.push(newDonHang)
        localStorage.setItem('order', JSON.stringify(donHang))
        yield put({
            type: CREATE_NEW_DON_HANG,
            payload: newdontHang
         })

         yield put({
            type: CLEAR_CART,
         })

    }catch(e) {};
}