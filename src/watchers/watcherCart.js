import { put, takeEvery, takeLeading } from "redux-saga/effects";
import { ADD_TO_CART, TAKE_FROM_CART } from "../Actions";

export default function* watcherCart()
{
    yield takeEvery(ADD_TO_CART,workerAddToCart);
}

function* workerAddToCart(action)
{   
    try{
        yield put({
            type: ADD_TO_CART,
        })
    }
    catch(e){}
}