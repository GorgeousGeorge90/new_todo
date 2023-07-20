import loginReducer, {
    logIn,
    logOut,
    addUser,
} from './../store/loginSlice';
import { LoginStateType } from '../types/types';


const initialState:LoginStateType = {
    users: [
        { id:'12', name: 'Egor', password: '1111'}
    ],
    current: 'Kate',
}

describe('login reducer cases',()=> {
    it('goal: default case',()=> {

        const result = loginReducer(initialState,({type:''}))
        expect(result).toEqual(initialState)
    })

    it('goal: login and change current value to Egor',()=> {

        const action = {
            type:logIn.type,
            payload:{
                name:'Egor',
                password:'1111',
            },
        }

        const result = loginReducer(initialState,action)
        expect(result.current).toBe('Egor')
    })

    it('goal: logout and change current value to null',()=> {

        const result = loginReducer(initialState,({type:logOut.type}))
        expect(result.current).toBeNull()
    })

    it('goal: add new user and get user array length:2',()=> {

        const action = {
            type:addUser.type,
            payload: {
                name:'Joker',
                password:'123',
            }
        }

        const result = loginReducer(initialState,action)
        expect(result.users).toHaveLength(2)
        expect(result.users[1].name).toBe('Joker')
    })
})