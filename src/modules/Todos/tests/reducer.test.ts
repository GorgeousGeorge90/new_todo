import todoReducer, {
    addNewYourTodo,
    completeYourTodo,
    updateYourTodo,
    deleteYourTodo,
    deleteCompletedYourTodos,
    deleteAllYourTodos,
} from '../store/todosSlice';
import { TodosType } from '../types/types';



const initialState:TodosType = {
    todos:[
        {id:1,name:'Egor',title:'Hello',text:'nice',complete:false,avatar:null},
        {id:2,name:'Egor',title:'Hello1',text:'nice1',complete:true,avatar:null},
        {id:3,name:'Egor',title:'Hello2',text:'nice2',complete:true,avatar:null},
    ],
    status:'idle',
    error:null,
}


describe('todoReducer tests',()=> {
    it('goal: default case test and get initialState',()=> {

        const result = todoReducer(initialState,({type:''}))
        expect(result).toEqual(initialState)
    })

    it('goal: add new todo and get todos length 4',()=> {

        const action = {
            type:addNewYourTodo.type,
            payload: [{ id:4, name:'Kate',title:'Hi',text:'joke',complete:false,avatar:null}]
        }

        const result = todoReducer(initialState,action)
        expect(result.todos).toHaveLength(4)
    })

    it('goal: to get todo with id:1 completed',()=> {

        const action = {
            type:completeYourTodo.type,
            payload:1,
        }

        const result = todoReducer(initialState,action)
        expect(result.todos[0].complete).toBe(true)
    })

    it('goal: update text for todo with id:1 to nice job!',()=> {

        const action = {
            type:updateYourTodo.type,
            payload: {
                id:1,
                new_text:'nice job!'
            }
        }

        const result = todoReducer(initialState,action)
        expect(result.todos[0].text).toBe('nice job!')
    })

    it('goal: delete todo with id:1 and get todos length 2',()=> {

        const action = {
            type:deleteYourTodo.type,
            payload: 1,
        }

        const result = todoReducer(initialState,action)
        expect(result.todos).toHaveLength(2)
    })

    it('goal: delete todos with complete:true ang get todos length 1', ()=> {

        const action = {
            type:deleteCompletedYourTodos.type,
            payload:'Egor',
        }

        const result = todoReducer(initialState,action)
        expect(result.todos).toHaveLength(1)
    })

    it('goal: delete all todos and get todos length 0',()=> {

        const action = {
            type:deleteAllYourTodos.type,
            payload:'Egor',
        }

        const result = todoReducer(initialState,action)
        expect(result.todos).toHaveLength(0)
    })
})