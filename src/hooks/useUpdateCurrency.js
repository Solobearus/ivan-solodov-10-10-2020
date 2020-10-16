import { currencySlice } from "../store/slices";
import { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios'

const fetchCurrency = async (dispatch) => {
    try {
        const result = await axios('https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS');
        dispatch(currencySlice.actions.setUSDtoILS(result.data.rates.ILS))
    } catch (e) { console.error(e) };
}

export default (dispatch) => {

    const currencyUpdateInterval = useRef();
    const { intervalForCurrencyUpdate } = useSelector((state) => state.currency);

    useEffect(() => { fetchCurrency(dispatch) }, [dispatch]);

    useEffect(() => {
        currencyUpdateInterval.current && clearInterval(currencyUpdateInterval.current);

        currencyUpdateInterval.current = setInterval(() => fetchCurrency(dispatch), intervalForCurrencyUpdate);

        return () => clearInterval(currencyUpdateInterval.current);
    }, [intervalForCurrencyUpdate,dispatch])

}