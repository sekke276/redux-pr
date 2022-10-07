import styles from "./styles.module.css";
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <div className={styles.header}>
            <Link to="/home">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/donhang">Don Hang</Link>
            <Link to="/detailorders">Chi Tiet</Link>
        </div>
    )
}