import loginApi from '../api/loginApi';


describe('loginApi',()=> {
    it('goal: try to get data',async ()=> {

        const result = await loginApi.usersBase()
        if (result) {
            expect(result[0].name).toBe('Egor')
        }
    })

    it('goal: to add new user',async ()=> {

        const result = await loginApi.addNewUser('Mike', '2222')
        if (result) {
            expect(result[0].name).toBe('Mike')
        }
    })

    it('goal: get array with length 4', async ()=> {

        const result = await loginApi.getAvatars()
        expect(result).toHaveLength(4)
    })
})