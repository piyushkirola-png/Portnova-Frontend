import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://portnovaio.com/api',
    prepareHeaders: (headers, { getState }) => {
      let token = (getState() as RootState).auth?.token;

      if (!token && typeof window !== 'undefined') {
        token = localStorage.getItem('auth_token');
      }

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      headers.set('content-type', 'application/json');
      return headers;
    },
  }),
  tagTypes: [
    'Product',
    'Cart',
    'Order',
    'User',
    'Inventory',
    'Wishlist',
    'Notification',
    'Payment',
  ],
  endpoints: () => ({}),
});

export const { middleware: apiMiddleware } = baseApi;
