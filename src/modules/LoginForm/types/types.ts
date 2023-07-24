
export type UserType = {
    id:string,
    name:string,
    password:string,
    avatar:string,
}

export type ErrorType = {
    message:string
}

export type FetchType = UserType & {
    error: null | string,
}

export type UserLoginType = Pick<UserType, 'name' | 'password'>

export type LoginStateType = {
    users:UserType[],
    current: UserType | null,
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: null | string,
}

export type MainFormType = {
    name: string,
    password: string,
}

export type AddUserFormType= {
    new_name: string,
    new_password: string,
}

export type FormPropsType = {
    onClick:()=> void,
}

