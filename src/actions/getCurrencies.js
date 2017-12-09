import axios from "axios";

export const FETCH_CURRENCIES = "fetch_currencies";

const ROOT_URL = "https://api.coinmarketcap.com/v1/ticker";
const LIMIT = "limit=100"

export const fetchCurrencies = (data) => ({
    type: FETCH_CURRENCIES,
    data
});

export function startFetchCurrencies(language) {
    const request = `${ROOT_URL}/?${LIMIT}&convert=${language}`;
    
    return (dispatch) => {
        return axios.get(request).then(({data}) => {
            dispatch(fetchCurrencies(data));
        })
    }
}