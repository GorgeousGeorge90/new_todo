
export type UserType = {
    id:number,
    name:string,
    password:string,
    avatar:string | null,
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
    avatars:null | string[],
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

