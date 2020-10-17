import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


export const useGetDataByURL = () => {

    let history = useHistory();

    const isItemsURL = history.location.pathname === "/list"

    // TODO: improve
    const sliceToTakeData =
        isItemsURL ? "items" : "recievedItems";

    const { [sliceToTakeData]: dataFromSlice } = useSelector(
        (state) => state.items
    );

    return { isItemsURL, dataFromSlice };
}