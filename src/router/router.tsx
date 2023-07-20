import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import LayoutElement from './LayoutElement';
import LoginPage from '../pages/LoginPage/LoginPage';
import MainPage from '../pages/MainPage/MainPage';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={'/'} element={<LayoutElement/>}>
            <Route index element={<LoginPage/>}/>
            <Route path={'/todos'} element={<MainPage/>}/>
        </Route>
    )
)

export default router

