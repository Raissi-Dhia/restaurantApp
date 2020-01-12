import { SET_ORDER } from '../actions/constants';

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ORDER:
      return [...action.payload];
    default: return state;
  }
};

export default orderReducer;