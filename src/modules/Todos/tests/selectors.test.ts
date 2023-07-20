import { getTodos } from '../selectors/selectors';
import { TodosType } from '../types/types';
import { RootState } from "../../../store/store";
import homer from '../../../assets/img/homer.png';


describe('selectors',()=> {
    it('goal: get array with length - 1',()=>{
        const todos:TodosType = {
            todos:[
                {id:'1',name:'Egor',title:'Hi',text:'Nice!',complete:false,date:'1231',avatar:homer}
            ],
            status:'idle',
        }

        const result = getTodos({todos} as RootState)
        expect(result).toHaveLength(1)
        expect(result[0].name).toBe('Egor')
    })
})