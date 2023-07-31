import { SubmitHandler, useForm } from 'react-hook-form';
import { AddUserFormType, FormPropsType } from '../../types/types';
import styles from './AddUserForm.module.scss';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { addNewUser } from '../../store/loginSlice';
import { useNavigate } from 'react-router-dom';
import { getError}  from "../../selectors/selectors";
import {toast} from "react-toastify";



const AddUserForm = ({onClick}:FormPropsType) => {
    const dispatch = useAppDispatch()
    const error = useAppSelector(getError)
    const navigate = useNavigate()
    const { register, reset, formState:{errors}, handleSubmit } = useForm<AddUserFormType>()

    const onSubmit:SubmitHandler<AddUserFormType> = data => {
        dispatch(addNewUser(data))

        if (error) {
            toast(error)
        } else {
            alert('Success!')
            onClick()
        }
    }
    const backMove = (event:React.SyntheticEvent) => {
        event.preventDefault()
        onClick()
    }

    return (<form className={styles.add_form_content}
                  onSubmit={handleSubmit(onSubmit)}>
        <input className={styles.add_form_input}
               type='text'
               placeholder={'new name'}
               {...register('new_name', {required:true})}
        />
        <input className={styles.add_form_input}
               type='text'
               placeholder={'new password'}
               {...register('new_password', {required:true})}/>
        <button onClick={backMove}
                className={styles.add_form_back}>back</button>
        <button className={styles.add_form_registration}>registration</button>
    </form>)
}

export default AddUserForm