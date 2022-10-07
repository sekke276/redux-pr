import { useSelector } from "react-redux"
import DongHangLine from "./DongHangLine";
import styles from './styles.module.css'

export default function DonHang()
{
    const donHang = useSelector(state => state.donHangReducer.order);
    const dongDonHang = useSelector(state => state.dongDonHangReducer.dongDonHang);

    return(
        <div className={styles.container}>
            <table>
                <thead>
                    <td>Tên</td>
                    <td>Trước Thuế</td>
                    <td>Tổng Thuế</td>
                    <td>Tổng Tiền</td>
                    <td> </td>
                </thead>
                <tbody>
                    {
                        donHang.map(item => {
                            return <DongHangLine dongHang = {item}/>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}