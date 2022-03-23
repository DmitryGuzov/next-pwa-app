import ProductService from '../../../services/product.service';

import { getProductsAction } from '../actions';

const getProductsThunk = (skip, limit, sort, search) => {
  return async (dispatch, getState) => {
    try {
      const response = await ProductService.getProducts(
        skip,
        limit,
        sort,
        search
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(
          getProductsAction({
            products: response.data.rows,
            total: response.data.count,
          })
        );
      }
    } catch (error) {}
  };
};

export default getProductsThunk;
