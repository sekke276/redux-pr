import { CREATE_NEW_DON_HANG } from "../Actions";
import { put, takeLeading } from 'redux-saga/effects';

export default function* watcherDonHang()
{
    yield takeLeading(CREATE_NEW_DON_HANG, workerAddDonHang)
}

function* workerAddDonHang(action)
{
    try{
        console.log('chay watcher')
        yield put({
            type: CREATE_NEW_DON_HANG,
            payload: [...action.payload]
        })
    }catch(e){}
}