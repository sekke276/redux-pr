
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import OrderLine from './OrderLine';
import styles from './styles.module.css'

export default function DetailOrders()
{
    let {id} = useParams();
    const product = useSelector(state => state.sanPhamReducer.sanpham);
    const dongDonHang = useSelector(state => state.dongDonHangReducer.dongDonHang);
    let products = [];
    let filter = dongDonHang.filter(item => item._id === id)
    if(filter.length > 1)
    {
    products = product.map(item => {
            let dongHang = filter.find(dongHang =>  item.id === dongHang.item_id)
            return{
                ...item,
                soLuong: dongHang.soLuong,
                truocThue: dongHang.truocThue,
                tongThue: dongHang.tongThue,
            }
        })
    }
    else
    {
        let findProduct = product.find(item => item.id === filter[0].item_id)
        
        products.push({...findProduct, 
            soLuong: filter[0].soLuong,
            truocThue: filter[0].truocThue,
            tongThue: filter[0].tongThue})
    }
    console.log('products', products)

    
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
                            
                            products.map(item => <OrderLine order={item}/>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}