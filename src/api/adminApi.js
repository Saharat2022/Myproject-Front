import axios from "../config/axios";

export const createProduct = (input) =>
  axios.post("/admin/createProduct", input);

export const getNewItem = () => axios.get("/admin/allItem");

export const deleteItem = (id) => axios.delete("/admin/deleteItem/" + id);

export const getcategory = () => axios.get("/admin/allcategory");

export const getOneIdEdit = (id) => axios.get("/admin/edit/" + id);
