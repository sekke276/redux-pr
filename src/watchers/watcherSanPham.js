import { delay, put, take, takeEvery, takeLatest, takeLeading } from 'redux-saga/effects';
import { CREATE_NEW_SANPHAM, TAKE_SANPHAM } from '../Actions';
export default function* watcherSanPham()
{
    yield takeLeading(CREATE_NEW_SANPHAM,workerAddProduct);
}

function* workerAddProduct(action)
{
    try{
        yield put({
            type: CREATE_NEW_SANPHAM,
            sanpham: [...action.payload]
        })
    }
    catch(e){}
}