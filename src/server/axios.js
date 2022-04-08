import axios from "axios";
import router from "../router/index";
import Vue from 'vue'

const service = axios.create({
    // baseURL: process.env.NODE_ENV=='development'?'/api': '',
    timeout: 60000,
});

// 请求拦截（配置发送请求的信息）
service.interceptors.request.use(
    (config) => {
        const token = '';
        config.headers["Authorization"] = `Bearer ${token}` || "";
        return Promise.resolve(config);
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

// 响应拦截（配置请求回来的信息）
service.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
    // 处理响应失败
    // let isHasFreshToken = false;
    // isHasFreshToken = $.cookie('access_token');
    //   if(resp.status === 401){
    //     iview.Message.error('登录超时，请重新登录！');
    //     router.replace('/login');
    //   }
    //   else if (resp.status == 500) {
    //     iview.Message.error('服务器出错了！');
    //   }
    //   else if (resp.status == 504) {
    //     iview.Message.error('网络链接超时！');
    //   }
    //   return Promise.reject(resp)
);

// console.log(service.adornUrl)
export default service;
