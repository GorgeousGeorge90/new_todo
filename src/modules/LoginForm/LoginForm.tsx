import styles from './LoginForm.module.scss';
import React, {useEffect, useState} from "react";
import MainForm from "./components/MainForm/MainForm";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchUsersBase } from "./store/loginSlice";



const LoginForm = () => {
    const [editMode,setEditMode] = useState(false)
    const dispatch = useAppDispatch()

    return (<div className={styles.form_container}>
        <h3 className={styles.form_title}>login</h3>
        {
            editMode ? <AddUserForm onClick={()=>setEditMode(false)}/>:
                <MainForm onClick={()=>setEditMode(true)}/>
        }
    </div>)
}

export default LoginForm