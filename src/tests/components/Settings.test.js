import React from 'react';
import { shallow } from 'enzyme';
import { Settings } from '../../components/Settings';
import fiat from '../data/fiat';

let changeFiat, wrapper;

beforeEach(() => {
    changeFiat = jest.fn();
    wrapper = shallow(
        <Settings
            fiat={fiat}
            changeFiat={changeFiat}
        />
    );
});

test('should render settings with corrected fiat', () => {
    wrapper.setProps({
        fiat: fiat
    });
    expect(wrapper).toMatchSnapshot();
});

test('should change fiat', () => {
    const value = 'usd';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(changeFiat).toHaveBeenCalledWith(value);

});