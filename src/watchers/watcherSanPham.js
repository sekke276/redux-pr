import { delay, put, select, take, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';
import { CREATE_NEW_SANPHAM, CREATE_SAN_PHAM_SUCCESS, TAKE_SANPHAM } from '../Actions';
export default function* watcherSanPham()
{
    yield takeLeading(CREATE_NEW_SANPHAM,workerAddProduct);
}

function* workerAddProduct(action)
{
    try{
        let product = yield select(state => state.sanPhamReducer.sanpham)
         product.unshift(action.payload)
        localStorage.setItem('sanPham',JSON.stringify(product))
        console.log('product',product)
        yield put({
            type: CREATE_SAN_PHAM_SUCCESS,
            payload: product,
        })
    }
    catch(e){}
}