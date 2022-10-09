import React from "react";
import { useAdmin } from "../contexts/AdminContext";
import { useAuth } from "../contexts/AuthContext";

function CardHeader({ product: { courseImg, id } }) {
  const { user } = useAuth();
  const { deleteProduct } = useAdmin();
  console.log(courseImg, id);
  return (
    <>
      {user?.role === "admin" ? (
        <>
          <div className="absolute -top-4 -right-3 ">
            <button
              className="btn btn-delete border-2 rounded-lg"
              onClick={() => deleteProduct(id)}
              type="button"
            >
              <span className="mdi mdi-delete mdi-24px"></span>
              <span className="mdi mdi-delete-empty mdi-24px"></span>
              <span className="font-medium">X</span>
            </button>
          </div>
        </>
      ) : (
        false
      )}

      <div className="flex justify-center w-[15rem] h-[13rem]">
        <img className="h-[13rem] w-screen" src={courseImg} alt="course"></img>
      </div>
    </>
  );
}

export default CardHeader;
