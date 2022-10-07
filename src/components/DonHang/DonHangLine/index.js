
export default function DonHangLine({dongHang})
{
    return(
        <tr>
            <td>{dongHang.ten}</td>
            <td>{dongHang.truocThue}</td>
            <td>{dongHang.tongThue}</td>
            <td>{dongHang.tongTien}</td>
            <td><button>Chi Tiết</button></td>
        </tr>
    )
}