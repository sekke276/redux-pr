import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { ADD_TO_CART } from '../../../Actions';
import {BsFillCartPlusFill} from 'react-icons/bs'

export default function Product({product, cart})
{
    const[amount,setAmount] = useState(1);
    const dispatch = useDispatch();
    const handleChangeAmount = (e) =>{
        setAmount(e.currentTarget.value);
    }
    const handleAddToCart = () =>{
            dispatch({
                type: ADD_TO_CART,
                payload: {
                    _id: product.id,
                    ten: product.ten,
                    gia: product.gia,
                    thue: product.thue,
                    hinh: product.hinh,
                    soLuong: amount,
                },
            })
        
    }
     return(
        <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.imgContainer}>
                <img className={styles.image} 
                src={product.hinh} 
                width={250} 
                height={150}/> 
            </div>
        </div>
            <div className={styles.content}>
                <p className={styles.name}>{product.ten}</p>
                <p className={styles.price}>Giá:<strong> ${product.gia}</strong></p>
                <p className={styles.price}>Thuế:<strong> ${product.thue} </strong></p>
                {
                    product.soLuong > 0 ?
                    <div className={styles.amountActive}>
                    <p className={styles.inform}>Đã thêm vào giỏ: {product.soLuong}</p>
                    </div>
                    : 
                    <div className={styles.amountContainer}>
                    </div>
                }
                <div className={styles.addToCart}>
                    <input type="number" 
                    className={styles.inputNumber}
                    value={amount}
                    onChange={handleChangeAmount}
                    onKeyPress={(e) => validate(e)}
                    />
                    <button onClick={handleAddToCart} className={styles.addToCartButton} ><BsFillCartPlusFill/></button>
                </div>
            </div>
        </div>
        )
}const validate = (e) =>{
    if(!/[0-9]/.test(e.key))
    {
        e.preventDefault();
    }
}