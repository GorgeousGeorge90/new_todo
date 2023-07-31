import todosApi from '../api/todosApi';


describe('todos API',()=> {
    it('goal: fetch todos', async () => {

        const result = await todosApi.fetchTodos()
        expect(result?.length).toBeGreaterThanOrEqual(0)
    })

    it('goal: add new todo',async () => {

        const result = await todosApi.addNewTodo('Kate','First task', 'i will do it')
        if(result)
        expect(result[0].name).toBe('Kate')
    })

    it('goal: change status current todo', async ()=> {

        await todosApi.completeTodo(1, true)
        const result = await todosApi.fetchTodos()
        if (result) {
            expect(result[0].complete).toBe(false)
        }
    })

    it('goal: change text to Hey you!', async ()=> {

        await todosApi.updateTodo(1,'Hey you!')
        const response = await todosApi.fetchTodos()
        if (response) {
            const result = response.find(item => item.id === 1)
            expect(result.text).toBe('Hey you!')
        }
    })

    it('goal: delete todo', async ()=> {

        await todosApi.deleteTodo(1)
        const response = await todosApi.fetchTodos()
        if (response) {
            const result = response.find(item => item.id === 1)
            expect(result).toBe(undefined)
        }
    })

    it('goal: delete all todos', async () => {

        await todosApi.deleteAllTodos('Egor')
        const response = await todosApi.fetchTodos()
        if (response) {
            const result = response.filter(item => item.name === 'Egor')
            expect(result).toHaveLength(0)
        }
    })

    it('goal: delete complete todos from Kate', async () => {

        await todosApi.deleteCompleteTodos('Kate')
    })
})