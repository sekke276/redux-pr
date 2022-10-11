import { useSelector } from "react-redux"
import styles from './index.module.css'
import DonHangLine from "./DonHangLine";
import '../../styles/global.css';
export default function DonHang()
{
    const donHang = useSelector(state => state.donHangReducer.order);
    return(
        <div className={styles.container}>
            <table>
                <caption>Đơn Hàng</caption>
                <div className={styles.tableContainer}>
                <thead>
                    <td>Tên</td>
                    <td>Trước Thuế</td>
                    <td>Tổng Thuế</td>
                    <td>Tổng Tiền</td>
                    <td> </td>
                </thead>
                <tbody>
                    {
                        donHang.map((item, index) => {
                            return <DonHangLine key={index} dongHang = {item}/>
                        })
                    }
                </tbody>
                </div>
            </table>
        </div>
    )
}