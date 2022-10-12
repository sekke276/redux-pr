import styles from './index.module.css';

export default function CartLine({product})
{
    const preTax = product.soLuong * product.gia;
    const total = preTax + product.thue * product.soLuong;
    const tax = product.thue * product.soLuong;
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
            <img className={styles.image} src={product.hinh} width={120} height={100}/>
            <div className={styles.infoProduct}>
                <p className={styles.name}>Tên: {product.ten}</p>
                <p className={styles.content}>Giá: ${product.gia}</p>
            </div>
            </div>
            <div className={styles.calculate}>
                <p className={styles.content}>Thuế: ${product.thue} x {product.soLuong} sản phẩm = ${tax}</p>
                <p className={styles.price}>Thành Tiền: ${total}</p>
            </div>
            
        </div>
    )
}