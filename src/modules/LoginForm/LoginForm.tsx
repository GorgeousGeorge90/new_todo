import styles from './LoginForm.module.scss';
import React, { useState } from 'react';
import MainForm from './components/MainForm/MainForm';
import AddUserForm from './components/AddUserForm/AddUserForm';




const LoginForm = () => {
    const [editMode,setEditMode] = useState(false)

    return (<div className={styles.form_container}>
        <h3 className={styles.form_title}>login</h3>
        {
            editMode ? <AddUserForm onClick={()=>setEditMode(false)}/>:
                <MainForm onClick={()=>setEditMode(true)}/>
        }
    </div>)
}

export default LoginForm