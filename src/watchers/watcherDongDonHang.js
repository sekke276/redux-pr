import {delay, put, takeLeading} from 'redux-saga/effects';
import { CREATE_NEW_DONG_DON_HANG } from '../Actions';

export default function* watcherDongDongHang()
{
    yield takeLeading(CREATE_NEW_DONG_DON_HANG, workerAddDonDongHang);
}

function* workerAddDonDongHang(action)
{
    try{
        console.log('chay watcher trong don Dong hang')
        yield put({
            type: CREATE_NEW_DONG_DON_HANG,
            payload: [...action.payload],
        })
    }catch(e) {};
}