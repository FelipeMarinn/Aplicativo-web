import { shallow } from 'enzyme';
import React from 'react'
import { Provider } from 'react-redux'
import { Publicaciones } from '../../components/Publicaciones';
import { store } from '../../store/store';


const wrapper = shallow(
    <Provider store={ store }>
        <Publicaciones />
    </Provider>
)

it ('se renderiza correctamente', () => {
    expect( wrapper ).toMatchSnapshot()
})
