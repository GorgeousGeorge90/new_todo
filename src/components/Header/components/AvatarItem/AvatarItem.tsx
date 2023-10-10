import { useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {getAllAvatars, getCurrent} from '../../../../modules/LoginForm/selectors/selectors';
import {changeAvatar} from "../../../../modules/LoginForm/store/loginSlice";
import styles from './AvatarItem.module.scss';

type AvatarProps = {
    edit:boolean,
    setEdit:(edit:boolean)=>void,
}

const AvatarItem = ({edit,setEdit}:AvatarProps) => {
    const avatars = useAppSelector(getAllAvatars)
    const current = useAppSelector(getCurrent)
    const dispatch = useAppDispatch()


    return (<div className={styles.avatar_item_container}>
        {
            edit && avatars ? <ul className={styles.avatar_item_list}>
                {
                    avatars.map((avatar, i) => <li className={styles.avatar_item_el}
                                                   key={i}
                                                   onClick={()=>{
                        if (current) {
                            const payload = {
                                id:current.id,
                                avatar:avatar,
                            }
                            dispatch(changeAvatar(payload))
                            setEdit(false)
                        }
                    }}><img className={styles.avatar_item_img}
                            src={avatar} alt='ava'/></li>)
                }
            </ul>:null
        }
    </div>)
}

export default AvatarItem