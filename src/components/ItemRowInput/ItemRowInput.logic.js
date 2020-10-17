import {
    useState,
} from "react";
import { itemsSlice, snackSlice } from "../../store/slices";
import { useDispatch, useSelector } from "react-redux";


export const useItemRowInput = () => {
    const dispatch = useDispatch();
    const { stores } = useSelector((state) => state.items);


    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [date, setDate] = useState(new Date());
    const [store, setStore] = useState('');

    const validateSubmit = () => {


        if (!name || name.length < 2) {
            dispatch(snackSlice.actions.openSnack({ message: "please enter a valid name. string with more than 2 letters expected" }));
            return false
        }
        if (!price || isNaN(price) || price <= 0) {
            dispatch(snackSlice.actions.openSnack({ message: "please enter a valid price. positive number is expected" }));
            return false
        }
        if (!date) {
            dispatch(snackSlice.actions.openSnack({ message: "please enter a valid date" }));
            return false
        }
        if (!store || !stores.includes(store)) {
            dispatch(snackSlice.actions.openSnack({ message: "please choose one of the stores from the dropdown" }));
            return false
        }
        return true;
    };

    const handleSubmit = () =>
        validateSubmit() &&
        dispatch(itemsSlice.actions.addItem({ name, price, date: date.getTime(), store }));

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
