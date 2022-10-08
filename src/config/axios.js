import axios from "axios";
import { getAccessToken, removeAccessToken } from "../utils/localStorage";
import { API_ENDPOINT_URL } from "./env";

axios.defaults.baseURL = API_ENDPOINT_URL;

axios.interceptors.request.use(
  // Do something before request is sent and has 2 parameter (config,err)
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    //มันจะเอา config เก่า-ใหม่ มา merge กัน
    return config;
  },
  // Do something with request error
  (err) => {
    //throw new Error
    // ดักจบที่ตัวนี้เเล้ว ก็ไม่ต้องใส่ try catch เเล้ว ตอนส่ง getMe
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    //401 = authen not success บางทีอาจจะหมดอายุ
    if (err.response.status === 401) {
      removeAccessToken();
      return window.location.replace("/");
    }

    return Promise.reject(err);
  }
);

export default axios;
