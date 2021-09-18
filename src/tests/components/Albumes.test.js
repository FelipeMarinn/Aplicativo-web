import React from 'react'
import { shallow } from 'enzyme';
import { Albumes } from '../../components/Albumes'
import { Provider } from 'react-redux'
import { store } from '../../store/store';


const wrapper = shallow(
    <Provider store={ store } >
        <Albumes />
    </Provider>
)

it ('se renderiza correctamente', () => {
    expect( wrapper ).toMatchSnapshot()
})

it ('debe mostrar el id del album correctamente', () => {

    // const idAlbum = wrapper.find('.album-id').at(0)
    // console.log(idAlbum.html())

})
