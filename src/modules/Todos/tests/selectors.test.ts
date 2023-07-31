import {getCurrentTodos, getTodos} from '../selectors/selectors';
import { RootState } from "../../../store/store";
import homer from '../../../assets/img/homer.png';


describe('selectors',()=> {
    it('goal: get array with length - 1',()=>{
        const todos = {
            todos:[
                {id:1,name:'Egor',title:'Hi',text:'Nice!',complete:false,avatar:homer},
                {id:2,name:'Kate',title:'Hello!',text:'Nice guys!',complete:false,avatar:homer},
                {id:3,name:'Kate',title:'Hello2!',text:'Nice guys!!!',complete:false,avatar:homer}
            ],
            status:'idle',
        }

        const result = getTodos({todos} as RootState)
        expect(result).toHaveLength(1)
        expect(result[0].name).toBe('Egor')
    })

    // it(`goal: get Kate's todos and get array with length 2`, ()=> {
    //
    //     const result = getCurrentTodos('Kate')
    //     console.log(result)
    // })
})