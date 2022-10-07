import styles from "./styles.module.css";

export default function Header() {
    return (
        <div className={styles.header}>
            <a href="/home">Home</a>
            <a href="/cart">Cart</a>
            <a href="/donhang">Don Hang</a>
            <a href="/chitiet">Chi Tiet</a>
        </div>
    )
}