const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
  },
  USER: {
    PROFILE: '/user/profile',
    UPDATE_PROFILE: '/user/update-profile',
  },
  PRODUCTS: {
    LIST: '/products',
    DETAILS: id => `/products/${id}`,
  },
};

export default API_ENDPOINTS;
