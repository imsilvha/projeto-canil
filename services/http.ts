import axios from 'axios';

declare const process: {
  env: {
    EXPO_PUBLIC_API_URL?: string;
  };
};

export const httpClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL ?? 'https://api.canilpublico.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('HTTP error:', error.response.status, error.response.data);
    }
    return Promise.reject(error);
  },
);
