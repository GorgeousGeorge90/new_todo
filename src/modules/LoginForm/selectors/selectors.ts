import { RootState } from '../../../store/store';

export const getUsers = (state:RootState) => state.login.users
export const getCurrent = (state:RootState) => state.login.current