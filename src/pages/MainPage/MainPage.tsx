import TaskForm from '../../components/TaskForm/TaskForm';
import Todos from '../../modules/Todos/Todos';
import ClearBar from '../../components/ClearBar/ClearBar';
import styles from './MainPage.module.scss';
import { useAppSelector } from "../../store/hooks";
import { getCurrent } from "../../modules/LoginForm/selectors/selectors";



const MainPage = () => {
    const current = useAppSelector(getCurrent)


    return (<div className={styles.main_page_container}>
        <TaskForm/>
        {
            current ?  <ClearBar name={current.name}/>:null
        }
        <Todos/>
    </div>)
}

export default MainPage