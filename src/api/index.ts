import axios from 'axios';
import { Product } from '../types';

const BASE_URL = 'http://localhost:3001'

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getAll = async (key: 'products' | 'shops') => {
  const result = await instance.get(key);
  return result.data;
};

export const createShop = async (name: string) => {
  const result = await instance.post(`${BASE_URL}/shops`, {
    name
  });
  return result.data;
};

export const removeShop = async (id: string) => {
  const result = await instance.delete(`/shops/${id}`);
  return result.data;
};

export const updateShopName = async (id: string, name: string) => {
  const result = await instance.put(`/shops/${id}`, { name });
  return result.data;
};

export const createProduct = async (name: string, quantity: number, shopId: string) => {
  const result = await instance.post('/products', {
    name,
    quantity,
    shopId
  });
  return result.data;
};

export const removeProduct = async (id: string) => {
  const result = await instance.delete(`/products/${id}`);
  return result.data;
};

export const updateProduct = async (id: string, product: Product) => {
  const result = await instance.put(`/products/${id}`, product);
  return result.data;
};
