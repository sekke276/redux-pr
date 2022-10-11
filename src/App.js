import './styles/global.css';
import store from './store'
import './styles/reset.css';
import {Routes, Route} from "react-router-dom"
import { Provider, } from 'react-redux';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import DanhSachDonHang from './pages/DanhSachDonHang';
import DetailOrders from './DetailOrders';

function App() {
  return (
   
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<HomePage/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
        <Route path="/detailorders/:id" element={<DetailOrders/>}></Route>
        <Route path="/donhang" element={<DanhSachDonHang/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
