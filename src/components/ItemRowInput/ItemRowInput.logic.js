import React, {
    useState,
    useEffect,
    useContext,
    useCallback,
    useMemo,
    useRef,
} from "react";
import { itemsSlice } from "../../store/slices";
import { useDispatch, useSelector } from "react-redux";


export const useItemRowInput = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState("");
    const [store, setStore] = useState(null);

    const handleSubmit = () => {
        dispatch(itemsSlice.actions.addItem({ name, price, date, store }));
    };

    const { stores } = useSelector((state) => state.items);

    return {
        name,
        setName,
        price,
        setPrice,
        date,
        setDate,
        store,
        setStore,
        stores,
        handleSubmit,
    }
}
