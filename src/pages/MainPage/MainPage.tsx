import {useEffect} from "react";
import {useAppSelector} from "../../store/hooks";
import {getCurrent} from "../../modules/LoginForm/selectors/selectors";
import {useNavigate} from "react-router-dom";


const MainPage = () => {
    const current = useAppSelector(getCurrent)
    const navigate = useNavigate()


    return (<div>
        MainPage
    </div>)
}

export default MainPage