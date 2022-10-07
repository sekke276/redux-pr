import './styles/global.css';
import store from './store'
import './styles/reset.css';
import {Routes, Route} from "react-router-dom"
import { Provider, useDispatch, useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import DanhSachDonHang from './pages/DanhSachDonHang';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<HomePage/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path="/chitiet" element={<HomePage/>}></Route>
        <Route path="/donhang" element={<DanhSachDonHang/>}></Route>
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
