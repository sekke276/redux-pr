
export default function OrderLine({order})
{
    return(
          <tr>
            <td><img src={order.hinh} width={150} height={80}/></td>
            <td>{order.ten}</td>
            <td>${order.gia}</td>
            <td>{order.soLuong}</td>
            <td>${order.truocThue}</td>
            <td>${order.tongThue}</td>
        </tr>
    )
}