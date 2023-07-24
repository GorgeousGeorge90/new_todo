import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import styles from '../App.module.scss';
import { ReactComponent as GH } from '../assets/img/gh.svg';



const LayoutElement = () => {

    return (<div className={styles.app_container}>
        <Header/>

        <main className={styles.app_main}>
            <div className={'flex items-center justify-center'}>
                <Outlet/>
            </div>
        </main>

        <footer className={styles.app_footer}>
            <GH/>
            <p><a href='https://github.com/GorgeousGeorge90'>https://github.com/GorgeousGeorge90</a></p>
        </footer>
    </div>)
}

export default LayoutElement