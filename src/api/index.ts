import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { message } from 'antd';
import * as Cookies from 'js-cookie';

// axios.defaults.timeout = 10000;
axios.defaults.baseURL = process.env.NODE_ENV === 'production'
  ? 'https://douban-api.uieee.com' // 这里设置实际项目的生产环境地址
  : 'https://douban-api.uieee.com';

let startFlag = false; // loadingStart的标志

// 拦截器
export default function AxiosConfig() {
  // 请求拦截
  axios.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.data && config.data.showLoading) {
      // 需要显示loading的请求
      startFlag = true;
    }
    // 请求 access_token，登录后每个请求都带上
    if (Cookies.get('auth')) {
      config.headers.Authorization = Cookies.get('auth');
    }
    if (config.params) config.params._t = Date.now();

    return config;

  }, (err: AxiosError) => {
    if (startFlag) {
      startFlag = false;
    }
    return Promise.reject(err);
  });

  // 响应拦截
  axios.interceptors.response.use((res: AxiosResponse) => {
    if (startFlag) {
      startFlag = false;
    }
    return res.data;
    
  }, (err: AxiosError) => {
    // 服务器错误
    if (err.response && (err.response.status+'').startsWith('5')) {
      message.error('请求出错！')
    }
    if (startFlag) {
      startFlag = false;
    }
    return Promise.reject(err);
  })
}
