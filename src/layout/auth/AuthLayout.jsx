import Header from "../header/Header";
import { Outlet } from "react-router-dom";

import Footers from "../Footer/Footers";

function AuthLayout() {
  return (
    <>
      <div className="relative min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footers />
    </>
  );
}

export default AuthLayout;
