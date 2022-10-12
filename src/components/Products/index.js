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
    const listProduct = products.map((product) => {
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
        <div className={styles.buttonContainer}>
        <button className={styles.buttonOpenModal}
        onClick={()=> setIsOpenModal(!isOpenModal)}
        >Thêm
        </button>
        </div>
        <div className={styles.tableContainer}>
            {
                listProduct.map(item => 
                <Product product={item} key={item.id}/>)
            }
        </div>
        {
            isOpenModal && <AddProductForm setIsOpenModal={setIsOpenModal} />
        }
        </div>
    )
}