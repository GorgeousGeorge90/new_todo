import loginApi from '../api/api';


describe('loginApi',()=> {
    it('goal: try to get data',async ()=> {

        const result = await loginApi.usersBase()
        if(result)
        expect(result[0].name).toBe('Egor')
    })

    it('goal: to add new user',async ()=> {

        await loginApi.addNewUser('Kate','2222')
        const result = await loginApi.usersBase()
        expect(result?.length).toBeGreaterThanOrEqual(2)
    })
})