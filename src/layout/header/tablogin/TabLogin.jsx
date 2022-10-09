import { Dropdown, Navbar } from "flowbite-react";
import React from "react";

import { Link } from "react-router-dom";
import Avatan from "../../../component/ui/Avatar";
import { useAuth } from "../../../contexts/AuthContext";

function TabLogin() {
  const { logout, user } = useAuth();
  // const [isOpen, setIsopen] = useState(false);
  // const dropdownEl = useRef();
  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (!dropdownEl.current.contains(e.target)) {
  //       setIsopen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  // }, []);
  // console.log(user.role === "user");
  console.log(user);
  return (
    <>
      <div className=" px-4 my-auto text-sm ">
        {user ? (
          user.role === "user" ? (
            <div className="flex items-center ">
              <span className=" mr-8 hover:text-orange-400 ">
                <Link to="/stepapply">วิธีสมัครเรียน</Link>
              </span>

              <Navbar fluid={true} rounded={true}>
                <div
                  className="flex md:order-2 hover:border-2 hover:rounded-lg hover: border-white border-2 hover:border-red-600"
                  // ref={dropdownEl}
                >
                  <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={
                      <Avatan
                        src={
                          user.profileImage === "null" ? "" : user.profileImage
                        }
                      />
                    }
                    // onClick={() => setIsopen((pre) => !pre)}
                  >
                    <Dropdown.Header className="border-red-600 border-2">
                      <span className="block text-sm">{`Hi ${user.firstName}`}</span>
                      <span className="block truncate text-sm font-medium">
                        {user.email}
                      </span>
                    </Dropdown.Header>
                    <Link to="user/editprofile">
                      <Dropdown.Item>Editprofile</Dropdown.Item>
                    </Link>
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
              <Link to="/">
                <span className="border-red-600 border-2 rounded-md px-4 py-1.5 shadow-md shadow-[#da4f4f] ">
                  {`Hi ${user.firstName}`}
                </span>
              </Link>
            </>
          )
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
