import React from "react";
import Cards from "../component/firstpage/Cards";

import TabAdmin from "../component/TabAdmin";
import { useAuth } from "../contexts/AuthContext";

function AdminCategory() {
  const { user } = useAuth();
  return (
    <div className="mt-[40px] border-red-200 border-2 ">
      <div className="w-9/12 mx-auto h-full  flex justify-start gap-3">
        {user ? (
          user.role !== "admin" ? (
            <div className="border-red-900 border-2 w-full ">
              <div className="w-full h-full flex justify-center">
                <Cards />
              </div>
            </div>
          ) : (
            <>
              <TabAdmin />
              <div className="border-red-900 border-2 w-3/4 p-10">
                <div className="w-full h-full ">
                  <Cards />
                </div>
              </div>
            </>
          )
        ) : (
          <>
            <div className="border-red-900 border-2 w-3/4 p-10">
              <div className="w-full h-full ">
                <Cards />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AdminCategory;
