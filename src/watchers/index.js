import {all} from 'redux-saga/effects';
import watcherCart from './watcherCart';
import watcherDongDongHang from './watcherDongDonHang';
import watcherDonHang from './watcherDonHang';
import watcherSanPham from './watcherSanPham';

export default function* rootSaga()
{
    yield all([
        watcherSanPham(),
        watcherCart(),
        watcherDonHang(),
        watcherDongDongHang(),
    ])
}