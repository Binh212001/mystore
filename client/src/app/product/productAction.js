import { productApi } from '../../apis/productApi';

export const NEW__PRODUCT = 'NEW__PRODUCT';

export const NEW__PRODUCT__FAIL = 'NEW__PRODUCT__FAIL';

export const FETCH__LIST__PRODUCT = 'FETCH__LIST__PRODUCT';

export const FETCH__LIST__PRODUCT__FAIL = 'FETCH__LIST__PRODUCT__FAIL';

export const UPDATE__PRODUCT = 'UPDATE__PRODUCT';

export const UPDATE__PRODUCT__FAIL = 'UPDATE__PRODUCT__FAIL';

export const REMOVE__PRODUCT = 'REMOVE__PRODUCT';

export const REMOVE__PRODUCT__FAIL = 'REMOVE__PRODUCT__FAIL';

export const SEARCH__PRODUCT = 'SEARCH__PRODUCT';

export const SEARCH__PRODUCT__FAIL = 'SEARCH__PRODUCT__FAIL';

export const fetchListProduct = (params) => {
  return async (dispatch) => {
    try {
      const res = await productApi.list(params);

      dispatch({
        type: FETCH__LIST__PRODUCT,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: FETCH__LIST__PRODUCT__FAIL,
      });
    }
  };
};

export const createProduct = (data) => {
  return async (dispatch) => {
    try {
      const res = await productApi.create(data);
      dispatch({
        type: NEW__PRODUCT,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: NEW__PRODUCT__FAIL,
      });
    }
  };
};

export const searchProduct = (params) => {
  return async (dispatch) => {
    try {
      const res = await productApi.search(params);

      dispatch({
        type: SEARCH__PRODUCT,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: SEARCH__PRODUCT__FAIL,
      });
    }
  };
};

export const removeProduct = (params) => {
  return async (dispatch) => {
    try {
      const res = await productApi.remove(params);
      console.log('🚀 ~ file: productAction.js:77 ~ return ~ res:', res);
      dispatch({
        type: REMOVE__PRODUCT,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: REMOVE__PRODUCT__FAIL,
      });
    }
  };
};
