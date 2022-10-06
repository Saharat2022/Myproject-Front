import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

function Navbar() {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        user.role !== "admin" ? (
          <ul className="flex gap-6 mx-20  font-sans pr-10 pb-2 pt-1.5 text-sm">
            {/* <li className=" hover:border-2  active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"> */}
            <li className=" hover:text-orange-400">
              <Link to="/" target="" rel="noopener noreferrer">
                หน้าหลัก
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/our" target="" rel="noopener noreferrer">
                รู้จักเรา
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/course" target="" rel="noopener noreferrer">
                คอร์สเรียน
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/portfolio" target="" rel="noopener noreferrer">
                ผลงาน
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/contact" target="" rel="noopener noreferrer">
                ติดต่อเรา
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/#" target="" rel="noopener noreferrer">
                คำถามที่พบบ่อย
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex gap-6 mx-20  font-sans pr-10 pb-2 pt-1.5 text-sm">
            {/* <li className=" hover:border-2  active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"> */}
            <li className=" hover:text-orange-400">
              <Link to="/" target="" rel="noopener noreferrer">
                หน้าหลัก
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/our" target="" rel="noopener noreferrer">
                รู้จักเรา
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/admin/course" target="" rel="noopener noreferrer">
                คอร์สเรียน
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/admin/portfolio" target="" rel="noopener noreferrer">
                ผลงาน
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/contact" target="" rel="noopener noreferrer">
                ติดต่อเรา
              </Link>
            </li>
            <li className="hover:text-orange-400">
              <Link to="/#" target="" rel="noopener noreferrer">
                คำถามที่พบบ่อย
              </Link>
            </li>
          </ul>
        )
      ) : (
        <ul className="flex gap-6 mx-20  font-sans pr-10 pb-2 pt-1.5 text-sm">
          {/* <li className=" hover:border-2  active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"> */}
          <li className=" hover:text-orange-400">
            <Link to="/" target="" rel="noopener noreferrer">
              หน้าหลัก
            </Link>
          </li>
          <li className="hover:text-orange-400">
            <Link to="/our" target="" rel="noopener noreferrer">
              รู้จักเรา
            </Link>
          </li>
          <li className="hover:text-orange-400">
            <Link to="/admin/course" target="" rel="noopener noreferrer">
              คอร์สเรียน
            </Link>
          </li>
          <li className="hover:text-orange-400">
            <Link to="/admin/portfolio" target="" rel="noopener noreferrer">
              ผลงาน
            </Link>
          </li>
          <li className="hover:text-orange-400">
            <Link to="/contact" target="" rel="noopener noreferrer">
              ติดต่อเรา
            </Link>
          </li>
          <li className="hover:text-orange-400">
            <Link to="/#" target="" rel="noopener noreferrer">
              คำถามที่พบบ่อย
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default Navbar;
