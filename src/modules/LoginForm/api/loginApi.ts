import supabase from "../../../api/client";

const baseUrl = 'https://uhhpxrydhbzktznkfszl.supabase.co/storage/v1/object/public/avatars/avatars/'

const loginApi = {
    usersBase: async () => {
        let { data: new_todo, error } = await supabase
            .from('users_base')
            .select('*')

        return new_todo
    },
    addNewUser: async (new_name:string,new_password:string) => {
        const { data, error } = await supabase
            .from('users_base')
            .upsert([
                { name: new_name, password: new_password },
            ])
            .select()

        return data
    },
    getAvatars: async () => {
        const gamer = await fetch(`${baseUrl}gamer.png?t=2023-07-26T19%3A48%3A42.551Z`)
        const girl = await fetch(`${baseUrl}girl.png?t=2023-07-26T19%3A51%3A28.808Z`)
        const man = await fetch(`${baseUrl}man.png?t=2023-07-26T19%3A51%3A56.081Z`)
        const woman = await fetch(`${baseUrl}woman.png?t=2023-07-26T19%3A52%3A36.364Z`)
        return [gamer.url,girl.url,man.url,woman.url]
    },
    changeAvatar: async (id:number, avatar:string) => {
        const { data, error } = await supabase
            .from('users_base')
            .update({ avatar: avatar })
            .eq('id', id)
            .select()
    }
}

export default loginApi