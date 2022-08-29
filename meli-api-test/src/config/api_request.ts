import { meliApiUrl } from '@variables'
import axios, { AxiosPromise } from 'axios'

const baseHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const axiosActions = (axiosInstance = axios.create()) => ({
  get: <
    D = Record<string, any>,
    Q = Record<string, any>
  >(url: string, query?: Q): AxiosPromise<D> => axiosInstance({
    url,
    baseURL: meliApiUrl,
    method: 'GET',
    headers: baseHeaders,
    params: query
  })
})

export default axiosActions
export const request = axiosActions()