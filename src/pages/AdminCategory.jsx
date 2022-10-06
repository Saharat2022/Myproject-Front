import React from "react";

import { Link } from "react-router-dom";
import Card from "../component/firstpage/card";
import TabAdmin from "../component/TabAdmin";

function AdminCategory() {
  return (
    <div className="mt-[40px] ">
      <div className="w-9/12 mx-auto mt-10 h-[100vh] border-red-500 border-2 flex justify-start gap-3">
        <TabAdmin />
        <div className="border-red-500 border-2 w-3/4 p-10">
          <div className="w-[50vw] h-[40px]">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCategory;
