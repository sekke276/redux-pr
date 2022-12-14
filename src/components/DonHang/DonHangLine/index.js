import { Link } from "react-router-dom"
import styles from './index.module.css';

export default function DonHangLine({dongHang})
{
    return(
        <tr>
            <td>{dongHang.ten}</td>
            <td>$ {dongHang.tongTruocThue}</td>
            <td>$ {dongHang.tongThue}</td>
            <td>$ {dongHang.tongTien}</td>
            <td><Link to={`/detailorders/${dongHang.id}`}><button  className={styles.buttonDetail}>Chi tiet</button></Link></td>
        </tr>
    )
}