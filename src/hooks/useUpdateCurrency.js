import { currencySlice } from "../store/slices";
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
const INTERVAL_FOR_CURRENCY_UPDATE = 10000;

const fetchCurrency = async (dispatch) => {
    try {
        const result = await axios('https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS');
        dispatch(currencySlice.actions.setUSDtoILS(result.data.rates.ILS))
    } catch (e) { console.error(e) };
}

export default (dispatch) => {

    const currencyUpdateInterval = useRef();
    const { intervalForCurrencyUpdate } = useSelector((state) => state.currency);

    useEffect(() => fetchCurrency(dispatch), []);

    useEffect(() => {
        currencyUpdateInterval.current && clearInterval(currencyUpdateInterval.current);

        currencyUpdateInterval.current = setInterval(() => fetchCurrency(dispatch), intervalForCurrencyUpdate);

        return () => clearInterval(currencyUpdateInterval.current);
    }, [intervalForCurrencyUpdate])

}