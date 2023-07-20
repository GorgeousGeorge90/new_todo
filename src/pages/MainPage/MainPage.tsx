import {useEffect} from "react";
import {useAppSelector} from "../../store/hooks";
import {getCurrent} from "../../modules/LoginForm/selectors/selectors";
import {useNavigate} from "react-router-dom";
import TaskForm from '../../components/TaskForm/TaskForm';
import Todos from '../../modules/Todos/Todos';


const MainPage = () => {


    return (<div className={'flex flex-col px-auto my-2 bg-violet-300'}>
        <TaskForm/>
        <Todos/>
    </div>)
}

export default MainPage