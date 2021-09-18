import React from 'react'
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme';
import { Myapp } from '../components/Myapp';


it ('se renderiza correctamente', () => {

    const wrapper = shallow(
            <Myapp />
    )

    // expect(toJson(wrapper)).toMatchSnapshot()
    expect( wrapper ).toMatchSnapshot()
})