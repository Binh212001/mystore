import apiConfig from './index';

const apiEnPoint = {
  signup: '/auth/signup',
  login: '/auth/login',
  update: '/auth/update',
};

const userApi = {
  register: (data) => {
    return apiConfig.post(apiEnPoint.signup, data, { params: {} });
  },
  login: (data) => {
    return apiConfig.post(apiEnPoint.login, data);
  },
  update: (data, params) => {
    return apiConfig.put(apiEnPoint.update, data, { params });
  },
};

export default userApi;
