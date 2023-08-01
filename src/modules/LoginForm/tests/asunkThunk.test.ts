import { fetchUsersBase } from '../store/loginSlice';


describe('fetchUsersBase',()=> {
    it('goal:fetchUsersBase test', async ()=> {

        const state  = {}

        const dispatch = jest.fn()
        const thunk = fetchUsersBase()
        await thunk(dispatch,()=> state, undefined)
        const { calls } = dispatch.mock
        expect(calls[0][0].type).toBe('@login/fetchUsersBase/pending')
        expect(calls[1][0].type).toBe('@login/fetchUsersBase/fulfilled')
        expect(calls[1][0].payload[0].name).toBe('Anton')
    })
})