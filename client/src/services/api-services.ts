import api from './api';

export const getSubCatagories = async (mainCategoryId) => {
  try {
    const response = await api.get(
      `/categories/${mainCategoryId}/subcategories`,
    );
    console.log(response);
    return response?.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getProductsByCatagory = async (categoryId) => {
  try {
    const response = await api.get(`/products/category/${categoryId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getLatestProducts = async () => {
  try {
    const response = await api.get('/latest');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const Login = async (props) => {
  try {
    const response = await api.get('/users/login', { ...props });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const Register = async (props) => {
  try {
    const response = await api.get('/users/register', { ...props });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const addToCart = async ({ userId, productId }) => {
  try {
    const response = await api.get(`/cart/add/:${userId}/:${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getCartDetails = async (userId) => {
  try {
    const response = await api.get(`/cart/:${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const removeCartProduct = async ({ userId, productId }) => {
  try {
    const response = await api.get(`/cart/remove/:${userId}/:${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const clearCart = async (userId) => {
  try {
    const response = await api.get(`/cart/clear/:${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getOrders = async (userId) => {
  try {
    const response = await api.get(`/orders/user/:${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getProductDetails = async (id) => {
  try {
    const response = await api.get(`/products/:${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const payment = async () => {
  try {
    const response = await api.get('/payments/create');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
