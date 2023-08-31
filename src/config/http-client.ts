import { default as axios } from 'axios';
import type { AxiosRequestConfig } from 'axios';

type ClientGetOptions = { url?: string; config?: AxiosRequestConfig };
type ClientPostOptions = { body?: unknown } & ClientGetOptions;

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_PROXY_URL}/${
    import.meta.env.VITE_API_BASE_URL
  }`,
});

export const httpClient = {
  get: <T>({ url = '', config = {} }: ClientGetOptions) =>
    axiosInstance.get<T>(url, config),
  post: <T>({ url = '', body, config = {} }: ClientPostOptions) =>
    axiosInstance.post<T>(url, body, config),
};
