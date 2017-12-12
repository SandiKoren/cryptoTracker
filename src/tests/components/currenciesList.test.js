import React from 'react';
import { shallow } from 'enzyme';
import { CurrenciesList } from '../../components/CurrenciesList';
import currencies from '../data/currencies';
import fiat from '../data/fiat';

let startFetchCurrencies, wrapper;

beforeEach(() => {
    startFetchCurrencies = jest.fn();
    wrapper = shallow(
        <CurrenciesList
            currencies={currencies}
            fiat={fiat}
            startFetchCurrencies={startFetchCurrencies}
        />
    );
});

test('should render Currencies list with currencies', () => {
    wrapper.setProps({
        currencies: currencies,
        fiat: fiat
    });
    expect(wrapper).toMatchSnapshot();
});

test('should refresh currencies', () => {
    wrapper.find('a').simulate('click');
    expect(startFetchCurrencies).toHaveBeenCalled();
    expect(startFetchCurrencies).toHaveBeenCalledWith(fiat.fiat);
});