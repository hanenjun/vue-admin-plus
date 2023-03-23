import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, CreateAxiosDefaults } from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
}as CreateAxiosDefaults)

type Response<T = any> = {
  code: number
  result: T
}

export default <T> (config: AxiosRequestConfig) => {
  return new Promise<Response<T>>((resolve, reject) => {
    instance.request<Response<T>>(config).then((response: AxiosResponse<Response<T>>) => {
      resolve(response.data)
    }).catch((error: AxiosError) => {
      reject(error)
    })
  })
}
