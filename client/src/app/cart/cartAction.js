import cartApi from '../../apis/cartApi';

export const NEW__CART = 'NEW__CART';
export const NEW__CART__FAIL = 'NEW__CART__FAIL';

export const REMOVE__CART = 'REMOVE__CART';

export const REMOVE__CART__FAIL = 'REMOVE__CART__FAIL';

export const FETCH__LIST__CART = 'FETCH__LIST__CART';

export const FETCH__LIST__CART__FAIL = 'FETCH__LIST__CART__FAIL';

export const newCart = (data) => {
  return async (dispatch) => {
    try {
      const res = await cartApi.create(data);

      dispatch({
        type: NEW__CART,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: NEW__CART__FAIL,
      });
    }
  };
};

export const fetchListCart = (params) => {
  return async (dispatch) => {
    try {
      const res = await cartApi.list(params);
      dispatch({
        type: FETCH__LIST__CART,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: FETCH__LIST__CART__FAIL,
      });
    }
  };
};
