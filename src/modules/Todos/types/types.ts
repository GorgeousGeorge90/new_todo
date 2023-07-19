
export type TodoItemType = {
    id: string,
    name: string,
    title: string,
    text: string,
    complete: boolean,
    date: string,
}


export type TodosType = {
    todos:TodoItemType[],
    status:string,
}