import { GetProductsAction, GET_PRODUCTS } from './types';

export const getProductsAction = (data) => ({
  type: GET_PRODUCTS,
  payload: data,
});
