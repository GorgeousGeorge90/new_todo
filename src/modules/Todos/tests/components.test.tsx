import * as reduxHooks from 'react-redux';
import { TodoItemType } from '../types/types';
import { render } from "@testing-library/react";
import TodoItem from "../components/TodoItem/TodoItem";


jest.mock('react-redux')
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector')

describe('render Todos',() => {
    it('goal: render TodoItem component',()=> {
        const data:TodoItemType = {
            id:1,
            title:'Hello',
            text:'nice',
            complete:false,
            avatar:null,
        }
        const dispatch = jest.fn()
        mockedDispatch.mockReturnValue(dispatch)
        mockedSelector.mockReturnValue(data)

        const view = render(<TodoItem {...data}/>)
        expect(view).toMatchSnapshot()
    })
})