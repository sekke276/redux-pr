import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART } from "../../Actions";
import AddProductForm from "../AddProductForm";
import Product from "./Product";
import styles from './styles.module.css'

export default function Products()
{
    const dispatch = useDispatch();

    const products = useSelector(state => state.sanPhamReducer.sanpham)
    const [isOpenModal,setIsOpenModal] = useState(false);
    const myCart = useSelector(state => state.myCartReducer.cart);
    console.log('my cart', myCart);
 
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
                <th> </th>
            </tr>
            </thead>
            <tbody>
            {
                products.map((product,index) => 
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