import Products from '../../components/Products'
import style from './style.module.css';
export default function HomePage()
{

    return(
        <div className={style.container}>
            <Products/>
        </div>
    )
}