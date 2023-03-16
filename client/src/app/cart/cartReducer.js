import {
  FETCH__LIST__CART,
  FETCH__LIST__CART__FAIL,
  NEW__CART,
  NEW__CART__FAIL,
} from './cartAction';

const initialState = {
  cart: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH__LIST__CART:
      return { ...state, cart: payload };

    case FETCH__LIST__CART__FAIL:
      return { ...state };

    case NEW__CART:
      return { ...state, cart: [payload, ...state.cart] };

    case NEW__CART__FAIL:
      return { ...state };
    default:
      return state;
  }
};
