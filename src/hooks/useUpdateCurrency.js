import { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import axios from 'axios'
import { currencySlice, snackSlice } from "../store/slices";

const fetchCurrency = async (dispatch) => {
    try {
        const result = await axios('https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS');
        console.log(`result`, result)
        dispatch(currencySlice.actions.setUSDtoILS(result.data.rates.ILS))
    } catch (e) {
        dispatch(
            snackSlice.actions.openSnack({
                message: `ERROR at fetching curreny from api.exchangeratesapi.io : ${e}`,
            })
        );
    };
}

export default (dispatch) => {



    const currencyUpdateInterval = useRef();
    const { intervalForCurrencyUpdate } = useSelector((state) => state.currency);

    useEffect(() => { fetchCurrency(dispatch) }, [dispatch]);

    useEffect(() => {
        currencyUpdateInterval.current && clearInterval(currencyUpdateInterval.current);

        currencyUpdateInterval.current = setInterval(() => fetchCurrency(dispatch), intervalForCurrencyUpdate);

        return () => clearInterval(currencyUpdateInterval.current);
    }, [intervalForCurrencyUpdate, dispatch])

}