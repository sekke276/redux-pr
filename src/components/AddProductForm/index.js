import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { CREATE_NEW_SANPHAM } from "../../Actions";
import styles from './styles.module.css'

export default function AddProductForm({setIsOpenModal})
{
    const dispatch = useDispatch();
    const products = useSelector(state => state.sanPhamReducer.sanpham)
    console.log(products)
    const [name,setName] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [price,setPrice] = useState(0);
    const[tax, setTax] = useState(0);
    const handleSetName = (e) =>{
        setName(e.currentTarget.value);
    }
    const handleSetImage = (e) =>{
        setImageLink(e.currentTarget.value);
    }
    const handleSetPrice = (e) =>{
        setPrice(e.currentTarget.value);
    }
    const handleSetTax = (e) =>{
        setTax(e.currentTarget.value);
    }
    const handleOnClickAdd = () =>{
        dispatch({
            type: CREATE_NEW_SANPHAM,
            payload: {
                id:  'La' + (new Date()).getTime(),
                ten: name,
                hinh: imageLink,
                gia: price,
                thue: tax,
            },
        })
    }
    return(
<div className={styles.background}>
    <div className={styles.container}>
        <div className={styles.header}>
            <button 
            onClick={() => setIsOpenModal(false)}
            className={styles.xbutton}>x</button>
        </div>
        <div className={styles.content}>
        <div className={styles.line}>
            <label htmlFor='name'>Tên</label>
            <input id="name" required className={styles.item} onChange={(e) => handleSetName(e)} value ={name}/>
        </div>
        <div className={styles.line}>
            <label htmlFor='img_link'>Link Ảnh</label>
            <input id ='img_link' required className={styles.item} onChange={(e) => handleSetImage(e)} value={imageLink}/>
        </div>
        <div className={styles.line}>
            <label htmlFor='price'>Đơn Giá</label>
            <input id ='price' className={styles.item} onChange={e => handleSetPrice(e)} value={price}/>
        </div>
        <div className={styles.line}>
        <label htmlFor='tax'>Tiền Thuế</label>
        <input id = 'tax' className={styles.item} onChange={e => handleSetTax(e)} value={tax}/>
        </div>
        <button onClick={handleOnClickAdd} id='tax' className={styles.button}>Thêm</button>
        </div>
    </div>
</div>
    )
}