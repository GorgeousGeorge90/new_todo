import { LoginStateType } from '../types/types';
import {
    getUsers,
    getCurrent,
} from '../selectors/selectors';
import { RootState } from '../../../store/store';


const login:LoginStateType = {
    users: [
        { id:'12', name: 'Egor', password: '1111'}
    ],
    current: 'Kate',
}

describe('login selectors',()=> {
    it('goal: select array users with length:1',()=> {

        const result = getUsers({login} as RootState)
        expect(result).toHaveLength(1)
        expect(result[0].name).toBe('Egor')
    })

    it('goal: select name from current',()=> {

        const result = getCurrent({login} as RootState)
        expect(result).toBe('Kate')
    })
})