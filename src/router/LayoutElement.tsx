import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';



const LayoutElement = () => {

    return (<div className={'flex flex-col h-screen w-[1100px]'}>
        <Header/>
        <br/>
        <main className={'flex-grow'}>
            <Outlet/>
        </main>
    </div>)
}

export default LayoutElement