import {
  FETCH__LIST__PRODUCT,
  FETCH__LIST__PRODUCT__FAIL,
  NEW__PRODUCT,
  NEW__PRODUCT__FAIL,
  REMOVE__PRODUCT,
  REMOVE__PRODUCT__FAIL,
  SEARCH__PRODUCT,
  SEARCH__PRODUCT__FAIL,
} from './productAction';

const initialState = {
  product: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW__PRODUCT:
      state.product.push(payload);
      return { ...state };
    case NEW__PRODUCT__FAIL:
      return { ...state };

    case FETCH__LIST__PRODUCT:
      return { ...state, product: payload };

    case FETCH__LIST__PRODUCT__FAIL:
      return { ...state };

    case SEARCH__PRODUCT:
      return { ...state, product: payload };

    case SEARCH__PRODUCT__FAIL:
      return { ...state };

    case REMOVE__PRODUCT:
      return { ...state };

    case REMOVE__PRODUCT__FAIL:
      return { ...state };
    default:
      return state;
  }
};
