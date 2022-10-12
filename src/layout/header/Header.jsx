import React from "react";
import Mylogo from "../../component/ui/icons/Mylogo";
import Navbar from "./navbar/Navbar";
// import logo from "../../asset/image/logo.png";
import Search from "./search/Search";
import TabLogin from "./tablogin/TabLogin";

function Header() {
  return (
    <div className="sticky top-0 left-0 bg-gray-200 z-50 shadow-2xl">
      <div className="border-b-4 border-gray-300">
        <div className=" w-9/12 mx-auto flex justify-between align-middle gap-2">
          <div className="-mt-6 w-1/4 flex justify-center items-center">
            {/* <img src="/image/logo/Logo.png" className=""/> */}
            <Mylogo />
          </div>
          <div className="w-3/4">
            <div className="mx-8 py-3.5 flex align-middle  mt-2.5 gap-5  ">
              {/* search */}
              <Search />
              <TabLogin />
            </div>

            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
