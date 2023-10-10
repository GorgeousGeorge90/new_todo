import { SubmitHandler, useForm } from 'react-hook-form';
import { FormPropsType, MainFormType } from '../../types/types';
import styles from './MainForm.module.scss';
import React, {useId} from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { logIn } from '../../store/loginSlice';
import { getStatus } from '../../selectors/selectors';
import { yupResolver } from '@hookform/resolvers/yup';
import { mainSchema } from '../../../../utils/validation';



const MainForm = ({onClick}:FormPropsType) => {
    const id = useId()
    const dispatch = useAppDispatch()
    const status = useAppSelector(getStatus)
    const { register, reset, formState:{errors}, handleSubmit } = useForm<MainFormType>({
        resolver: yupResolver(mainSchema),
    })

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
               htmlFor={`name-${id}`}>name</label>
        <input className={styles.main_form_input}
               type='text'
               id={`name-${id}`}
               aria-required={true}
               placeholder={'name'}
               {...register('name')}
        />
        <br/>
        <label className={styles.main_form_label}
               htmlFor={`password-${id}`}>password</label>
        <input className={styles.main_form_input}
               type='password'
               id={`password-${id}`}
               aria-required={true}
               placeholder={'enter your password'}
               {...register('password')}/>
        <button className={styles.main_form_new_user}
                type={'button'}
                aria-label={'create new acc'}
                onClick={onClick}
        >don't have account yet</button>
        <button className={styles.main_form_login}
                type={'submit'}
                aria-label={'enter'}
        >sign in</button>
    </form>)
}

export default MainForm