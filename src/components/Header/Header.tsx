import styles from './Header.module.scss';
import header_logo from './img/header_logo.png';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getCurrent } from '../../modules/LoginForm/selectors/selectors';
import { logOut } from '../../modules/LoginForm/store/loginSlice';
import AvatarItem from './components/AvatarItem/AvatarItem';
import { useState } from 'react';
import user from '../../assets/img/user.png';


const Header = () => {
    const dispatch = useAppDispatch()
    const current = useAppSelector(getCurrent)
    const [edit,setEdit] = useState(false)

    const onClick = () => {
        dispatch(logOut())
    }

    return (<div className={styles.header_container}>
        <header className={styles.header_content}>
            <section className={styles.header_logo}>
                <img src={header_logo}
                     alt='header_logo'/>
            </section>
            <section className={styles.header_info}>
                <h1 className={styles.header_title}>todoMaker</h1>
                <p>make your day more effective!</p>
            </section>
            <section className={styles.header_login_info}>
                {
                    current ? <div className={styles.header_login_info_online}>
                        <AvatarItem edit={edit}
                                    setEdit={setEdit}
                        />
                        {
                            current.avatar ? <img className={styles.header_login_ava}
                                                  src={current.avatar}
                                                  alt='pic'
                                                  onClick={()=>setEdit(prevState => !prevState)}
                                             />:
                                             <img className={styles.header_login_ava}
                                                  src={user}
                                                  alt='pic'
                                                  onClick={()=>setEdit(prevState => !prevState)}
                                             />
                        }
                        <p>{current.name}</p>
                        <button className={styles.header_login_btn}
                                onClick={onClick}>sign out</button>
                    </div>: <p>not authorised</p>
                }
            </section>
        </header>
    </div>)
}

export default Header