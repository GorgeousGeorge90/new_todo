import { RootState } from '../../../store/store';

export const getUsers = (state:RootState) => state.login.users
export const getCurrent = (state:RootState) => state.login.current
export const getError = (state:RootState) => state.login.error
export const getAllAvatars = (state:RootState) => state.login.avatars