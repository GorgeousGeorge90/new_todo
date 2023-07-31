
export type TodoItemType = {
    id: number,
    name: string,
    title: string,
    text: string,
    complete: boolean,
    avatar?: null | string,
}

export type TodosProps = {
    todos:TodoItemType[],
    title:string,
    avatar:string | null,
}

export type TaskType = Omit<TodoItemType, 'id' >
export type NewTodoType = Omit<TodoItemType, 'id' | 'avatar' | 'complete'>
export type NewTodoProps = Pick<TodoItemType, 'name' | 'title' | 'text'>
export type CompleteProps = Pick<TodoItemType, 'id' | 'complete'>
export type UpdateProps = Pick<TodoItemType, 'id' | 'text'>
export type updateTodoPayload = Pick<TodoItemType, 'id'| 'text'>
export type TodosType = {
    todos:TodoItemType[],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error:null | string,
}

