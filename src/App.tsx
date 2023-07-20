import React from 'react';
import styles from './App.module.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';

function App() {
  return (<div className={styles.app}>
        <RouterProvider router={router}/>
      </div>
  );
}

export default App;
