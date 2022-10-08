import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function TabAdmin() {
  const { logout } = useAuth();
  return (
    <>
      <div className="border-gray-600  border-2 rounded-md w-1/5 ml-5 pb-4 shadow-lg h-[250px] ">
        <div className="border-orange-100 border-2   mb-4 bg-blue-700 p-2 text-center rounded-md text-gray-50 my-0">
          Admin
        </div>
        <Link to="/admin/createcategory">
          <button
            type="button"
            className=" bg-opacity-90 border-white  border-4 w-full   bg-blue-500 p-2 text-center  text-gray-50 hover:border-2 hover:border-blue-900 hover:text-red-600 hover:font-bold flex justify-start items-center"
          >
            <img
              src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-add-icon.png"
              className=" w-8 h-8"
              alt="add category"
            />
            <span className="text-md ml-4">Add category</span>
          </button>
        </Link>
        <button
          type="button"
          className=" bg-opacity-90 border-white  border-4 w-full   bg-blue-500 p-2 text-center  text-gray-50 hover:border-2 hover:border-blue-900 hover:text-red-600 hover:font-bold flex justify-start items-center"
        >
          <span className="text-md mx-auto">List Order</span>
        </button>
        <button
          type="button"
          className=" bg-opacity-90 border-white  border-4 w-full   bg-blue-500 p-2 text-center  text-gray-50 hover:border-2 hover:border-blue-900 hover:text-red-600 hover:font-bold flex justify-start items-center"
          onClick={logout}
        >
          <span className="text-md  mx-auto">Sign Out</span>
        </button>
      </div>
    </>
  );
}

export default TabAdmin;
