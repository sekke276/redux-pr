import {  useState } from "react";
import {  useSelector } from "react-redux";

import AddProductForm from "../AddProductForm";
import Product from "./Product";
import styles from './styles.module.css'

export default function Products()
{
    const products = useSelector(state => state.sanPhamReducer.sanpham)
    const [isOpenModal,setIsOpenModal] = useState(false);
    const cart = useSelector(state => state.myCartReducer.cart);
    const listProduct = products.map((product, index) => {
        if(cart.find(item => item._id === product.id ))
        {
            let cartItem = cart.find(item => item._id === product.id )
            return {
                ...product,
                soLuong: cartItem.soLuong
            }
        }
        else
        {
            return{
                ...product,
                soLuong: 0
            }
        }
    })
    return(
        <div className={styles.container}>
        <button className={styles.buttonOpenModal}
        onClick={()=> setIsOpenModal(!isOpenModal)}
        >Thêm
        </button>
        <div className={styles.tableContainer}>

        <table>
            <caption>Danh sách sản phẩm</caption>
            <thead>
            <tr>
                <th>Hình</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Thuế</th>
                <th>Số Lượng</th>
                <th> </th>
            </tr>
            </thead>
            <tbody>
            {
                listProduct.map((product,index) => 
                    <Product key={index} product={product} />)
            }
    </tbody>
        </table>
        </div>
        {
            isOpenModal && <AddProductForm setIsOpenModal={setIsOpenModal} />
        }
        </div>
    )
}