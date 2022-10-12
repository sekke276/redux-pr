import { useSelector } from "react-redux"
import styles from './index.module.css'
import DonHangLine from "./DonHangLine";

export default function DonHang()
{
    const donHang = useSelector(state => state.donHangReducer.order);
    return(
        <div className={styles.container}>
            <table className={styles.tableScroll}> 
                <caption>Đơn Hàng</caption>
                <thead>
                <tr>
                    <th>Tên</th>
                    <th>Trước Thuế</th>
                    <th>Tổng Thuế</th>
                    <th>Tổng Tiền</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody className={styles.bodyscreen}>
                    {
                        donHang.map((item, index) => {
                            return <DonHangLine key={index} dongHang = {item}/>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}