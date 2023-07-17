import Axios, { InternalAxiosRequestConfig } from 'axios';

export const intercept = () => {
  Axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {

    const HOST = import.meta.env.VITE_HOST;
    config.url = HOST + config.url;

    return config;
  });
};
