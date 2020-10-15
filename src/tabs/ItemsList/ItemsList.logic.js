

import { itemsSlice } from '../../store/slices'

export const onClick = (dispatch, item) => {
    dispatch(itemsSlice.actions.recieveItem({ id: item.id }));
};