import styles from './Header.module.scss';
import header_logo from './img/header_logo.png';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getCurrent } from '../../modules/LoginForm/selectors/selectors';
import homer from './img/homer.png';
import { logOut } from '../../modules/LoginForm/store/loginSlice';


const Header = () => {
    const dispatch = useAppDispatch()
    const current = useAppSelector(getCurrent)

    const onClick = () => {
        dispatch(logOut)
    }

    return (<div className={styles.header_container}>
        <header className={styles.header_content}>
            <section className={styles.header_logo}>
                <img src={header_logo}
                     alt='header_logo'/>
            </section>
            <section className={styles.header_info}>
                <h1>todo maker</h1>
                <p>make your day more effective!</p>
            </section>
            <section className={styles.header_login_info}>
                {
                    current ? <div>
                        <img src={homer} alt='avatar'/>
                        <button onClick={onClick}>sign out</button>
                    </div>: <p>not authorised</p>
                }
            </section>
        </header>
    </div>)
}

export default Header