import Header from "../header/Header";
import { Outlet } from "react-router-dom";

import Footers from "../Footer/Footers";

function AuthLayout({ user }) {
  return (
    <div className="relative border-red-600 border-2">
      <Header user={user} />
      <Outlet />
      <Footers />
    </div>
  );
}

export default AuthLayout;
