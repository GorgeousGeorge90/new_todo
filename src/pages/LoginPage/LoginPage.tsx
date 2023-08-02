import LoginForm from '../../modules/LoginForm/LoginForm';
import { useEffect } from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {getCurrent, getError} from "../../modules/LoginForm/selectors/selectors";
import { useNavigate } from "react-router-dom";
import styles from './LoginPage.module.scss';
import {clearError} from "../../modules/LoginForm/store/loginSlice";



const LoginPage = () => {
    const current = useAppSelector(getCurrent)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const error = useAppSelector(getError)

    useEffect(()=> {
        if (current) {
            navigate('/todos')
        }
    },[current])

    useEffect(()=> {
        if (error) {
            setTimeout(()=> {
                dispatch(clearError())
            },3000)
        }
    },[error])

    return (<div className={styles.login_page_container}>
        {
            error ? <p className={styles.login_page_error}>{error}</p>:null
        }
        <LoginForm/>
    </div>)
}

export default LoginPage