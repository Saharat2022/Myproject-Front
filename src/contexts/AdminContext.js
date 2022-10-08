import { createContext, useContext, useEffect, useState } from "react";

import Spinner from "../component/ui/Spinner";
import * as adminService from "../api/adminApi";
import { toast } from "react-toastify";

const AdminContext = createContext();

function AdminContextProvider({ children }) {
  const [allProduct, setAllProduct] = useState([]);
  const [allcategory, setAllCategory] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  //   console.log(allProduct);
  //ทุกครั้งที่รีเฟชรหน้า
  useEffect(() => {
    const newProduct = async () => {
      try {
        const res = await getProduct();
        setAllProduct(res.data.allitem);
      } catch (err) {
        //responsr only 500 ถึงจะเข้าตรงนี้
        console.log(err);
      } finally {
        setInitialLoading(false);
      }
    };

    newProduct();
  }, []);

  useEffect(() => {
    const newcategory = async () => {
      try {
        const res = await adminService.getcategory();
        setAllCategory(res.data.category);
        console.log(res.data.category);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    };
    newcategory();
  }, []);

  const getProduct = async () => {
    return await adminService.getNewItem();
  };
  const deleteProduct = async (id) => {
    try {
      const res = await adminService.deleteItem(id);
      const itemdelete = allProduct.filter((item) => item.id !== id);
      setAllProduct(itemdelete);
      toast.success(res.data.message);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  const setNewProduct = (newProduct) => {
    const cloneProduct = [...allProduct];
    cloneProduct.push(newProduct);
    setAllProduct(cloneProduct);
  };

  const getidEdit = async (id) => {
    return await adminService.getOneIdEdit(id);
  };

  if (initialLoading) return <Spinner />;

  return (
    <AdminContext.Provider
      value={{
        allProduct,
        setNewProduct,
        deleteProduct,
        allcategory,
        getidEdit,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => {
  return useContext(AdminContext);
};
export default AdminContextProvider;
