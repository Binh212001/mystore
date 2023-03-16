import userApi from '../../apis/userApi';

export const LOGIN = 'LOGIN';
export const LOGIN__FAIL = 'LOGIN__FAIL';

export const LOGOUT = 'LOGOUT';
export const LOGOUT__FAIL = 'LOGOUT__FAIL';

export const SIGNUP = 'SIGNUP';
export const SIGNUP__FAIL = 'SIGNUP__FAIL';

export const UPDATE__USER = 'UPDATE__USER';
export const UPDATE__USER__FAIL = 'UPDATE__USER__FAIL';

export const signUp = (data) => {
  return async (dispatch) => {
    try {
      const res = await userApi.register(data);
      console.log('🚀 ~ file: userAction.js:19 ~ return ~ res:', res);

      dispatch({
        type: SIGNUP,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: SIGNUP__FAIL,
        payload: {
          message: 'Username or password invalid',
        },
      });
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    try {
      const res = await userApi.login(data);

      dispatch({
        type: LOGIN,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: LOGIN__FAIL,
        payload: {
          message: 'Username or password invalid',
        },
      });
    }
  };
};

export const updateUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await userApi.update(data);

      dispatch({
        type: UPDATE__USER,
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: UPDATE__USER__FAIL,
      });
    }
  };
};

export const logout = () => {
  return { type: LOGOUT };
};
