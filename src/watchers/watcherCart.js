import { put, takeEvery, takeLeading } from "redux-saga/effects";
import { ADD_TO_CART, CLEAR_CART, TAKE_FROM_CART } from "../Actions";

export default function* watcherCart()
{
    yield takeEvery(ADD_TO_CART,workerAddToCart);
    yield takeLeading(CLEAR_CART,workerClearCart);
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

function* workerClearCart(action)
{
    try{
        yield put({
            type: CLEAR_CART,
        })
    }catch(e){}
}