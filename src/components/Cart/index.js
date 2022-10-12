import CartLine from "./CartLine";
import {useDispatch, useSelector} from 'react-redux';
import styles from './index.module.css';
import { CREATE_NEW_DONG_DON_HANG } from "../../Actions";

export default function Cart()
{
    const dispatch = useDispatch();
    const myCart = useSelector(state => state.myCartReducer.cart);
    const donHangList = useSelector(state => state.donHangReducer.order);
    var tax = 0;
    var preTax =0;
    if(myCart.length > 0)
    {
     tax = myCart[0].thue * myCart[0].soLuong
     preTax = myCart[0].gia * myCart[0].soLuong
    var newDongHang ={

        _id: 'DH' + donHangList.length,
        item_id: myCart[0]._id,
        soLuong: myCart[0].soLuong,
        gia: myCart[0].gia,
        truocThue: myCart[0].gia * myCart[0].soLuong,
        tongThue: myCart[0].thue * myCart[0].soLuong,
    }
    if(myCart.length > 1)
    {
        tax = myCart.reduce((pre,next) =>
        pre.thue * pre.soLuong + next.thue*next.soLuong)
        preTax = myCart.reduce((pre,next) =>{ 
        return(pre.gia * pre.soLuong + next.gia * next.soLuong )})
        newDongHang = myCart.map(item => {
            return {
                _id: 'DH' + donHangList.length  ,
                item_id: item._id,
                soLuong: item.soLuong,
                gia: item.gia,
                truocThue: item.gia * item.soLuong,
                tongThue: item.thue * item.soLuong
            }
        })
    }
    console.log('new dong hang',newDongHang)
}
    const total = myCart.reduce((sum, curr) =>  sum+ ((parseInt(curr.gia) + curr.thue) * curr.soLuong),0);
    const handlePaymentButton = () =>{
        dispatch({
            type: CREATE_NEW_DONG_DON_HANG,
            payload: newDongHang
        })
    }

    return(
        <div className={styles.container}>

            <div className={styles.tableContainer}>
            <div className={styles.tableHeader}></div>
                {
                    myCart.map((item, index) => 
                        <CartLine product={item} key={index}/>)
                    }
            </div>
           
        <div className={styles.paymentContainer}>
            <div className={styles.total}> Total: ${total}</div>
            <button className={styles.buttonPayment} onClick={handlePaymentButton}>Thanh Toán</button>
        </div>
        </div>
    )
}