import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


export const useGetDataByURL = () => {

    let history = useHistory();

    const isItemsTab = history.location.pathname === "/list"

    // TODO: improve
    const sliceToTakeData =
        isItemsTab ? "items" : "recievedItems";

    const { [sliceToTakeData]: dataFromSlice } = useSelector(
        (state) => state.items
    );

    return { isItemsTab, dataFromSlice };
}