import { render } from '@testing-library/react';
import AddUserForm from "../components/AddUserForm/AddUserForm";
import { BrowserRouter } from 'react-router-dom';
import MainForm from "../components/MainForm/MainForm";

jest.mock('react-redux')

describe('LoginForm render components', ()=> {
    it('goal: render AddUserForm',()=> {

        const onClick = jest.fn()

        const view = render(<BrowserRouter>
            <AddUserForm onClick={onClick}/>
                </BrowserRouter>)
        expect(view).toMatchSnapshot()
    })

    it('goal: render MainForm',()=> {

        const onClick = jest.fn()

        const view = render(<BrowserRouter>
            <MainForm onClick={onClick}/>
        </BrowserRouter>)
        expect(view).toMatchSnapshot()
    })

})