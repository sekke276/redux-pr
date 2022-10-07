import { combineReducers } from "redux";
import donHangReducer from "./donHangReducer";
import dongDonHangReducer from "./dongDonHangReducer";
import myCartReducer from "./myCartReducer";
import sanPhamReducer from "./sanPhamReducer";

const reducer = combineReducers({
    donHangReducer,
    dongDonHangReducer,
    myCartReducer,
    sanPhamReducer,
})

export default reducer;