import LoginForm from '../../modules/LoginForm/LoginForm';
import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import { getCurrent } from "../../modules/LoginForm/selectors/selectors";
import { useNavigate } from "react-router-dom";
import styles from './LoginPage.module.scss';


const LoginPage = () => {
    const current = useAppSelector(getCurrent)
    const navigate = useNavigate()

    useEffect(()=> {
        if (current) {
            navigate('/todos')
        }
    },[current])

    return (<div className={styles.login_page_container}>
        <LoginForm/>
    </div>)
}

export default LoginPage