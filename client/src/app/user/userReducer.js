import {
  LOGIN,
  LOGIN__FAIL,
  LOGOUT,
  SIGNUP,
  SIGNUP__FAIL,
  UPDATE__USER,
  UPDATE__USER__FAIL,
} from './userAction';

const initialState = {
  user: JSON.parse(localStorage.getItem('store:user')) || null,
  message: '',
  isLogin: JSON.parse(localStorage.getItem('store:isLogin')) || false,
  token: JSON.parse(localStorage.getItem('store:token')) || false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      localStorage.setItem('store:user', JSON.stringify(payload));
      localStorage.setItem('store:isLogin', JSON.stringify(true));
      localStorage.setItem('store:token', JSON.stringify(payload.token));

      return {
        ...state,
        user: payload,
        isLogin: true,
        message: 'Login Successfully',
      };

    case LOGIN__FAIL:
      return {
        ...state,
        isLogin: false,
        message: 'Login Failure',
      };

    case SIGNUP:
      localStorage.setItem('store:user', JSON.stringify(payload));
      localStorage.setItem('store:isLogin', JSON.stringify(true));
      localStorage.setItem('store:token', JSON.stringify(payload.token));

      return {
        ...state,
        user: payload,
        isLogin: true,
        message: 'Sign up successfully',
      };

    case SIGNUP__FAIL:
      return {
        ...state,
        isLogin: false,
        message: 'Sign up failure',
      };

    case UPDATE__USER:
      localStorage.setItem('store:user', JSON.stringify(payload));

      return {
        ...state,
        user: payload,
        message: 'Updated',
      };

    case UPDATE__USER__FAIL:
      return {
        ...state,
        message: 'Updated Failure',
      };

    case LOGOUT:
      localStorage.removeItem('store:user');
      localStorage.removeItem('store:isLogin');
      localStorage.removeItem('store:token');
      return {
        ...state,
        user: null,
        token: '',
        isLogin: false,
      };
    default:
      return state;
  }
};
