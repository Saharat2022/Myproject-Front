import { Dropdown, Navbar } from "flowbite-react";
import React from "react";

import { Link } from "react-router-dom";
import Avatan from "../../../component/ui/Avatar";
import { useAuth } from "../../../contexts/AuthContext";

function TabLogin({ user }) {
  const { logout } = useAuth();
  return (
    <>
      <div className=" px-4 my-auto text-sm ">
        {user ? (
          <div className="flex items-center ">
            <span className=" mr-8 hover:text-orange-400 ">
              <Link to="/stepapply">วิธีสมัครเรียน</Link>
            </span>
            <Navbar fluid={true} rounded={true}>
              <div className="flex md:order-2 hover:border-2 hover:rounded-lg hover: border-white border-2 hover:border-red-600">
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatan src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-XCI17XUExBB3oCVfxKV6ZpXHPG-V0bI0A&usqp=CAU" />
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user.da}</span>
                    <span className="block truncate text-sm font-medium">
                      name@flowbite.com
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
              </div>
            </Navbar>
          </div>
        ) : (
          <>
            <span className=" mr-8 hover:text-orange-400">
              <Link to="/stepapply">วิธีสมัครเรียน</Link>
            </span>

            <span className="border-red-600 border-2 rounded-md px-4 py-1.5 shadow-md shadow-[#da4f4f] ">
              <Link to="/login" className=" hover:text-red-600 hover:font-bold">
                Login
              </Link>
              &nbsp;||&nbsp;
              <Link
                to="/register"
                className=" hover:text-blue-600 hover:font-bold"
              >
                Register
              </Link>
            </span>
          </>
        )}
      </div>
    </>
  );
}

export default TabLogin;
