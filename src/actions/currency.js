import axios from "axios";

export const FETCH_CURRENCIES = "fetch_currencies";
export const FETCH_CURRENCY = "fetch_currency";

const ROOT_URL = "https://api.coinmarketcap.com/v1/ticker";
const LIMIT = "limit=100"

export const fetchCurrencies = (data) => ({
    type: FETCH_CURRENCIES,
    data
});

export const startFetchCurrencies = (fiat) => {
    const request = `${ROOT_URL}/?${LIMIT}&convert=${fiat}`;
    
    return (dispatch) => {
        return axios.get(request).then(({data}) => {
            dispatch(fetchCurrencies(data));
        })
    }
}

export const fetchCurrency = (data, id) => ({
    type: FETCH_CURRENCY,
    data,
    id
});

export const startFetchCurrency = (id, fiat) => {
    const request = `${ROOT_URL}/${id}/?convert=${fiat}`;

    return (dispatch) => {
        return axios.get(request).then(({ data }) => {
            dispatch(fetchCurrency(data, id));
        })
    }
}