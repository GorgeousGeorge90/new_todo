
export type UserType = {
    id:string,
    name:string,
    password:string,
}


export type UserLoginType = Pick<UserType, 'name' | 'password'>

export type LoginStateType = {
    users:UserType[],
    current: string | null,
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

