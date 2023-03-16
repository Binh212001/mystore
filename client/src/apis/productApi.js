import apiConfig from '.';

const productEnPoint = {
  list: '/product/list',
  create: '/product/create',
  remove: '/product/remove',
  search: '/product/list/search',
  category: '/product/search/category',
  single: (id) => `/product/single/${id}`,
  update: '/product/update/',
};

export const productApi = {
  list: (params) => {
    return apiConfig.get(productEnPoint.list, { params });
  },
  create: (data) => {
    return apiConfig.post(productEnPoint.create, data);
  },

  update: (product) => {
    return apiConfig.put(productEnPoint.update, product);
  },
  single: (id) => {
    return apiConfig.get(productEnPoint.single(id));
  },

  search: (params) => {
    return apiConfig.get(productEnPoint.search, { params });
  },
  remove: (params) => {
    return apiConfig.put(productEnPoint.remove, {}, { params: params });
  },
};
