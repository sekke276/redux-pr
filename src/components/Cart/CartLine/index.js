import styles from './index.module.css';

export default function CartLine({product})
{
    const preTax = product.soLuong * product.gia;
    const total = preTax + product.thue * product.soLuong;
    const tax = product.thue * product.soLuong;
    return(
        <tr>
            <td><img src={product.hinh} width={150} height={150}/></td>
            <td>{product.ten}</td>
            <td>${product.gia}</td>
            <td>{product.soLuong}</td>
            <td>${total}</td>
            <td>${preTax}</td>
            <td>${tax}</td>
        </tr>
    )
}