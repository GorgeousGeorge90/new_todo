import { SubmitHandler, useForm } from 'react-hook-form';
import { AddUserFormType, FormPropsType } from '../../types/types';
import styles from './AddUserForm.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { addNewUser } from '../../store/loginSlice';
import { getUsers } from '../../selectors/selectors';
import React, { useEffect, useState } from 'react';


const AddUserForm = ({onClick}:FormPropsType) => {
    const dispatch = useAppDispatch()
    const users = useAppSelector(getUsers)
    const [length,_] = useState(users.length)
    const { register, reset, formState:{
        errors,
        isSubmitting,
    }, handleSubmit } = useForm<AddUserFormType>()

    useEffect(()=> {
        if ( length !== users.length ) {
            onClick()
        }
    },[users])

    const onSubmit:SubmitHandler<AddUserFormType> = data => {
        dispatch(addNewUser(data))
        reset()
    }

    const backMove = (event:React.SyntheticEvent) => {
        event.preventDefault()
        reset()
        onClick()
    }

    return (<form className={styles.add_form_content}
                  onSubmit={handleSubmit(onSubmit)}>
            <input className={styles.add_form_input}
               type='text'
               placeholder={'new name'}
               {...register('new_name', { required:true, minLength:3 })}
            />
            <input className={styles.add_form_input}
               type='password'
               placeholder={'new password'}
               {...register('new_password', { required:true ,minLength:3 })}/>
            <button className={styles.add_form_back}
                    type={'button'}
                    aria-label={'to previous login'}
                    onClick={backMove}>back</button>
            <button className={styles.add_form_registration}
                    type={'submit'}
                    disabled={isSubmitting}
                    aria-label={'registration'}>registration</button>
    </form>)
}

export default AddUserForm