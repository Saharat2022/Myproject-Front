import axios from "../config/axios";

export const register = (input) => axios.post("/register", input);
export const login = ({ username, password }) =>
  axios.post("/login", { username, password });

//มันจะ insert header ให้อัตโนมัติ เพราะมี intercepter
//get ต้องส่ง header
export const getMe = () => axios.get("/me");
