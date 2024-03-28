import { Outlet,Link } from 'react-router-dom';
import styles from './NavBar.module.css'

export default function NavBar(){
    return(
        <>
                <ul className={styles.list}>
                    <li className={styles.item} >
                        <Link className={styles.link} to="/">Get</Link>
                    </li>

                    <li className={styles.item}>
                        <Link className={styles.link} to="/criar">Criar</Link>
                    </li>

                    <li className={styles.item}>
                        <Link className={styles.link} to="/list">List</Link>
                    </li>

                    <li className={styles.item}>
                        <Link className={styles.link} to="/putdelete">PutDelete</Link>
                    </li>
                </ul>
            <Outlet/>
        </>
    )
}