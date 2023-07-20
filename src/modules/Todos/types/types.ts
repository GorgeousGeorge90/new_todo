
export type TodoItemType = {
    id: string,
    name: string,
    title: string,
    text: string,
    complete: boolean,
    date: string,
    avatar:string,
}

export type TaskType = Omit<TodoItemType, 'date' | 'id' >
export type NewTodoType = Omit<TodoItemType, 'date'| 'id' | 'avatar' | 'complete'>

export type updateTodoPayload = Pick<TodoItemType, 'id'| 'text'>

export type TodosType = {
    todos:TodoItemType[],
    status:string,
}