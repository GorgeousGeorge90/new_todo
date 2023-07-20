import { SubmitHandler, useForm } from 'react-hook-form';
import {FormPropsType, MainFormType} from '../../types/types';
import styles from './MainForm.module.scss';
import React from 'react';
import { useAppDispatch } from "../../../../store/hooks";
import { logIn } from "../../store/loginSlice";



const MainForm = ({onClick}:FormPropsType) => {
    const dispatch = useAppDispatch()
    const { register, reset, formState:{errors}, handleSubmit } = useForm<MainFormType>()
    const onSubmit:SubmitHandler<MainFormType> = data => {
        dispatch(logIn(data))
        reset()
    }

    const handleClick = (event:React.SyntheticEvent) => {
        event.preventDefault()
        onClick()
    }

    return (<form className={styles.main_form_content}
                  onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.main_form_label}
               htmlFor='name'>name</label>
        <input className={styles.main_form_input}
               type='text'
               placeholder={'name'}
               {...register('name')}
        />
        <br/>
        <label className={styles.main_form_label}
               htmlFor='password'>password</label>
        <input className={styles.main_form_input}
               type='text'
               placeholder={'enter your password'}
               {...register('password')}/>
        <button className={styles.main_form_new_user}
                onClick={onClick}
        >don't have account yet</button>
        <button className={styles.main_form_login}>sign in</button>
    </form>)
}

export default MainForm