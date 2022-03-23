import { GET_PRODUCTS, ProductsState } from './types';
import { initialState } from './store';

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default productsReducer;
