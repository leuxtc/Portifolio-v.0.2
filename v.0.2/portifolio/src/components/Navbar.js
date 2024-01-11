import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <Link className={styles.nav_link} to='/' >Leonardo Rodrigues</Link>
            </div>
            <div className={styles.nav_links} >
                <div className={styles.nav_item} >
                    <Link className={styles.nav_link} to='/'>Home</Link>
                </div>
                <div>
                    <div className={styles.nav_item}>
                        <Link className={styles.nav_link} to='/about'>About</Link>
                    </div>
                </div>
                <div>
                    <div className={styles.nav_item} >
                        <Link className={styles.nav_link} to='/contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar