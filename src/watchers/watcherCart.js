import { put, takeEvery, select } from "redux-saga/effects";
import { ADD_TO_CART, ADD_NEW_TO_CART, UPDATE_PRODUCT } from "../Actions";

export default function* watcherCart()
{
    yield takeEvery(ADD_TO_CART,workerAddToCart);
}

function* workerAddToCart(action)
{   
    try{
        const products = yield select(state => state.myCartReducer.cart);
        let i = products.findIndex(item => item._id === action.payload._id)
        if(i >= 0)
        {
            let item = products.find(e => e._id === action.payload._id)
            item.soLuong = parseInt(item.soLuong) +parseInt(action.payload.soLuong)
            products[i] = item
            yield put({
                type: UPDATE_PRODUCT,
                payload: products
            })
        }
        else
        {
            yield put({
                type: ADD_NEW_TO_CART,
                payload: action.payload
            })
        }
    }
    catch(e){}
}

