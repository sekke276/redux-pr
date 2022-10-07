import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { ADD_TO_CART } from '../../../Actions';

export default function Product({product})
{
    const[amount,setAmount] = useState(1);
    const dispatch = useDispatch();
    const myCart = useSelector(state => state.myCartReducer.cart);
    const handleChangeAmount = (e) =>{
        setAmount(e.currentTarget.value);
    }
    const handleAddToCart = () =>{
        
            dispatch({
                type: ADD_TO_CART,
                payload: {
                    _id: product._id,
                    ten: product.ten,
                    gia: product.gia,
                    thue: product.thue,
                    hinh: product.hinh,
                    soLuong: amount,
                }
            })
        
    }
     return(
                        <tr>
                            <td><img src={product.hinh} width={150} height={80}/></td>
                            <td>{product.ten}</td>
                            <td>$ {product.gia}</td>
                            <td>$ {product.thue}</td>
                            <td>
                                <input onChange={(e)=>handleChangeAmount(e)} value={amount} type='number' className={styles.inputNumber}/>
                                <button onClick={handleAddToCart} className={styles.addToCartButton}>Add To Cart</button>
                            </td>
                        </tr>)
}