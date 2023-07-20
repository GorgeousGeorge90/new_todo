import { SubmitHandler, useForm } from 'react-hook-form';
import { AddUserFormType, FormPropsType } from '../../types/types';
import styles from './AddUserForm.module.scss';
import React from 'react';
import { useAppDispatch } from "../../../../store/hooks";
import { addUser } from '../../store/loginSlice';


const AddUserForm = ({onClick}:FormPropsType) => {
    const dispatch = useAppDispatch()
    const { register, reset, formState:{errors}, handleSubmit } = useForm<AddUserFormType>()
    const onSubmit:SubmitHandler<AddUserFormType> = data => {
        dispatch(addUser(data))
        onClick()
    }

    return (<form className={styles.add_form_content}
                  onSubmit={handleSubmit(onSubmit)}>
        <input className={styles.add_form_input}
               type='text'
               placeholder={'new name'}
               {...register('new_name')}
        />
        <input className={styles.add_form_input}
               type='text'
               placeholder={'new password'}
               {...register('new_password')}/>
        <br/>
        <button className={styles.add_form_registration}>registration</button>
    </form>)
}

export default AddUserForm