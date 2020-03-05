import Axios from "axios";
import store from "./store";
// import _ from 'lodash';
let axios = Axios.create({
  baseURL: "https://ehr.fjsg.com.cn/uat/zp",  
  // baseURL: "http://192.18.1.75:6600/ias/svc/hr/"
  // baseURL: "10.48.230.74:8092"
  timeout: 5000000
});
var timers = [];
// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    // config.headers.aaa=localStorage.getItem("token")
    var timer = setTimeout(() => {
      store.commit("showLoading");
    }, 300);
    timers.push(timer);
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    for (let i of timers) {
      clearTimeout(i);
    }
    timers = [];
    store.commit("hideLoading");
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  function(config) {
    // if(config.status==401){
    //   window.location.href="/login";
    // }
    for (let i of timers) {
      clearTimeout(i);
    }
    timers = [];
    store.commit("hideLoading");
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    for (let i of timers) {
      clearTimeout(i);
    }
    timers = [];
    store.commit("hideLoading");
    return Promise.reject(error);
  }
);

export default axios;
