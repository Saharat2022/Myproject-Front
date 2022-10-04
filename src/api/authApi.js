import axios from "../config/axios";

export const register = (input) => axios.post("/register", input);
