import React from 'react';
import {shallow} from 'enzyme';
import { Header } from '../../components/Header';

const startLogoutSpy = jest.fn();

test('should render header correctly', () => {
    const wrapper  = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot(); 
});

test('should call startLogout on button click', () => {
    const wrapper  = shallow(<Header startLogout={startLogoutSpy} />);
    wrapper.find('button').simulate('click');
    expect(startLogoutSpy).toHaveBeenCalled();

});