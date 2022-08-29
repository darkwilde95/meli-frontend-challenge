import axios, { AxiosPromise } from 'axios'
import { apiUrl } from './variables';

const baseHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const baseURL = apiUrl

const axiosActions = (axiosInstance = axios.create()) => ({
  get: <
    D = Record<string, any>,
    Q = Record<string, any>
  >(url: string, query?: Q): AxiosPromise<D> => axiosInstance({
    url,
    baseURL,
    method: 'GET',
    headers: baseHeaders,
    params: query
  })
})

export default axiosActions
export const request = axiosActions()