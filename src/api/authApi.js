import axios from "../config/axios";

export const register = (input) => axios.post("/register", input);
export const login = ({ username, password }) =>
  axios.post("/login", { username, password });
