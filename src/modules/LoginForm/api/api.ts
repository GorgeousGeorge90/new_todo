import supabase from "./client";



const loginApi = {
    usersBase: async () => {
        let { data: new_todo, error } = await supabase
            .from('new_todo')
            .select('*')

        return new_todo
    },
    addNewUser: async (new_name:string,new_password:string) => {
        const { data, error } = await supabase
            .from('new_todo')
            .insert([
                { name: new_name, password: new_password },
            ])
            .select()
    }
}

export default loginApi