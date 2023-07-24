import React, {useEffect} from 'react';
import styles from './App.module.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { fetchUsersBase } from "./modules/LoginForm/store/loginSlice";
import {useAppDispatch, useAppSelector} from "./store/hooks";


function App() {
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(fetchUsersBase())
    },[])

  return (<div className={styles.app}>
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
