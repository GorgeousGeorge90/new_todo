import { fetchTodos } from '../store/todosSlice';



global.fetch = jest.fn()

describe('fetchTodos',() => {
    it('goal: get all todos', async () => {
        const state = {}

        const dispatch = jest.fn()
        const thunk = fetchTodos()

        await thunk(dispatch,() => state,undefined)
        const { calls } = dispatch.mock
        expect(calls[0][0].type).toEqual('@todos/fetchTodos/pending')
        expect(calls[1][0].type).toEqual('@todos/fetchTodos/fulfilled')
        expect(calls[1][0].payload.length).toBeGreaterThanOrEqual(1)
    })
})

export {}