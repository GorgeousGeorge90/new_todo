import React, {useEffect} from 'react';
import styles from './App.module.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import {fetchAvatars, fetchUsersBase} from "./modules/LoginForm/store/loginSlice";
import { useAppDispatch } from "./store/hooks";
import {fetchTodos} from "./modules/Todos/store/todosSlice";


function App() {
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(fetchUsersBase())
        dispatch(fetchTodos())
        dispatch(fetchAvatars())
    },[])

  return (<div className={styles.app}>
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
