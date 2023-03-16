import apiConfig from '.';

const cartEnPoint = {
  list: '/cart/list',
  create: '/cart/create',
  delete: '/cart/delete',
  remove: '/cart/remove',
};

const cartApi = {
  list: (params) => {
    return apiConfig.get(cartEnPoint.list, { params });
  },
  create: (data) => {
    return apiConfig.post(cartEnPoint.create, data);
  },
  update: (data) => {
    return apiConfig.put(cartEnPoint.update, data);
  },
  remove: (params) => {
    return apiConfig.delete(cartEnPoint.remove, { params });
  },
};

export default cartApi;
