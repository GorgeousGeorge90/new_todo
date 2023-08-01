import { getCurrentTodos, getTodos } from '../selectors/selectors';
import { RootState } from '../../../store/store';


const state = {
    todos: {
        todos: [
            {id: 1, name: 'Egor', title: 'Hi', text: 'Nice!', complete: false, avatar: null},
            {id: 2, name: 'Kate', title: 'Hello!', text: 'Nice guys!', complete: false, avatar: null},
            {id: 3, name: 'Kate', title: 'Hello2!', text: 'Nice guys!!!', complete: false, avatar: null}
        ],
        status: 'idle',
    },
    login: {
        current: {id: 2, name: 'Kate'},
    }
}

describe('selectors',()=> {
    it('goal: get array with length - 3',()=>{

        const result = getTodos(state as RootState)
        expect(result).toHaveLength(3)
        expect(result[0].name).toBe('Egor')
    })

    it(`goal: get Kate's todos and get array with length 2`, ()=> {

        const result = getCurrentTodos(state as RootState)
        expect(result).toHaveLength(2)
    })
})