import supabase from '../../../api/client';


const todosApi = {
    fetchTodos: async () => {
        let { data: todos, error } = await supabase
            .from('todos')
            .select('*')

        return todos
    },

    addNewTodo: async (
        name:string,
        title:string,
        text:string,
        ) => {
        const { data, error } = await supabase
            .from('todos')
            .upsert({
                    name:name,
                    title:title,
                    text:text,
                    complete:false,
                })
            .select()

        return data
    },

    completeTodo: async (
        id:number,
        complete:boolean,
    ) => {
        const { data, error } = await supabase
            .from('todos')
            .update({ complete: complete })
            .eq('id', id)
            .select()
    },
    updateTodo: async (
        id:number,
        text:string,
    ) => {
        const { data, error } = await supabase
            .from('todos')
            .update({ text: text })
            .eq('id', id)
            .select()
    },
    deleteTodo: async ( id:number ) => {
        const {error} = await supabase
            .from('todos')
            .delete()
            .eq('id', id)
    },
    deleteAllTodos: async ( name:string ) => {
        const { error } = await supabase
            .from('todos')
            .delete()
            .eq('name', name)
    },
    deleteCompleteTodos: async ( name:string ) => {
        const { error } = await supabase
            .from('todos')
            .delete()
            .eq('name',name)
            .eq('complete',true)
    }
}

export default todosApi