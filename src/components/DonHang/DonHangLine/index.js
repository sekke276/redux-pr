

export default function DonHangLine({dongHang})
{
    return(
        <tr>
            <td>{dongHang.ten}</td>
            <td>$ {dongHang.tongTruocThue}</td>
            <td>$ {dongHang.tongThue}</td>
            <td>$ {dongHang.tongTien}</td>
        </tr>
    )
}