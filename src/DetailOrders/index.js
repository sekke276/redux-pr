import { useDispatch, useSelector } from 'react-redux'
import OrderLine from './OrderLine';
import styles from './styles.module.css'

export default function DetailOrders()
{
    const product = useSelector(state => state.sanPhamReducer.sanpham);
    console.log('product',product)
    const dongDonHang = useSelector(state => state.dongDonHangReducer.dongDonHang);
    const products = product.map((item) => {
        let dongHang = dongDonHang.find(donHang => donHang._id === item._id);
        console.log('dongdon hang',dongDonHang)
        return {...item,soLuong: dongHang.soLuong,
        truocThue: dongHang.truocThue,
        tongThue: dongHang.tongThue}
    })
    return(
        <div className={styles.container}>
            <div className={styles.tableContainer}>
                <table>
                    <caption>Chi tiết đơn hàng</caption>
                    <thead>
                        <tr>
                            <th>Hình Ảnh</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Trước Thuế</th>
                            <th>Thuế</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(item => 
                            <OrderLine order ={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}