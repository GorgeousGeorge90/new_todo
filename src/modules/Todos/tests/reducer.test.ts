import todoReducer, {
    addTodo,
    completeTodo,
    deleteTodo,
    updateTodo
} from './../store/todosSlice';
import { TodosType } from '../types/types';


const initialState:TodosType = {
    todos:[
        {id:'1',name:'Egor',title:'Hello!',text:'Nice!',complete:false,date:'123'}
    ],
    status:'idle',
}

describe('reducer cases',()=> {
    it('goal: default type case',()=> {

        const result = todoReducer(initialState,{type:''})
        expect(result).toEqual(initialState)
    })

    it('goal: add new todo and get todos.length - 2',()=> {

        const result = todoReducer(initialState,{type:addTodo.type})
        expect(result.todos).toHaveLength(2)
        expect(result.todos[1].text).toBe('Do it!')
    })

    it('goal: complete todo and get true',()=> {

        const action = {
            type:completeTodo.type,
            payload:'1',
        }

        const result = todoReducer(initialState,action)
        expect(result.todos[0].complete).toBe(true)
    })

    it('goal: update todo and get new text',()=> {

        const action = {
            type:updateTodo.type,
            payload: {
                id:'1',
                text:'I want to become a dev!'
            }
        }

        const result = todoReducer(initialState,action)
        expect(result.todos[0].text).toBe('I want to become a dev!')
    })

    it('goal: delete todo and get todos.length = 0', ()=> {

        const action = {
            type:deleteTodo.type,
            payload:'1',
        }

        const result = todoReducer(initialState,action)
        expect(result.todos).toHaveLength(0)
    })
})