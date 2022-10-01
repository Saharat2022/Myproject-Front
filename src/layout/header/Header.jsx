import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" sticky top-0 left-0 bg-white z-50">
      <div className="border-b-4 ">
        <div className=" w-9/12 mx-auto flex justify-between align-middle gap-2">
          <div className="border-red-600 border-2 w-1/4">
            <img src="logo.png" alt="logo" />
          </div>
          <div className="w-3/4">
            <div className="mx-4 py-3.5 flex align-middle  mt-2.5 gap-5">
              {/* search */}
              <div className="max-w-2xl mb-0 flex">
                <form className="flex items-center">
                  <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="search"
                      className="h-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search"
                      required=""
                    />
                    <button
                      type="button"
                      className="flex absolute inset-y-0 right-0 items-center pr-3"
                    ></button>
                  </div>
                  <button
                    type="submit"
                    className="h-7 inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </form>
              </div>
              <div className="  px-4 my-auto text-sm ">
                <span className=" mr-8 hover:text-orange-400">
                  <a href="/#">วิธีสมัครเรียน</a>
                </span>
                <span className="border-red-600 border-2 rounded-md px-4 py-1.5 shadow-md shadow-[#da4f4f] ">
                  <Link
                    to="/login"
                    className=" hover:text-red-600 hover:font-bold"
                  >
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
              </div>
            </div>

            <ul className="flex gap-6 mx-4 font-sans pr-10 pb-2 pt-1.5 text-sm">
              {/* <li className=" hover:border-2  active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"> */}
              <li className=" hover:text-orange-400">
                <a href="/#" target="" rel="noopener noreferrer">
                  หน้าหลัก
                </a>
              </li>
              <li className="hover:text-orange-400">
                <a href="/#" target="" rel="noopener noreferrer">
                  รู้จักเรา
                </a>
              </li>
              <li className="hover:text-orange-400">
                <a href="/#" target="" rel="noopener noreferrer">
                  คอร์สเรียน
                </a>
              </li>
              <li className="hover:text-orange-400">
                <a href="/#" target="" rel="noopener noreferrer">
                  ผลงาน
                </a>
              </li>
              <li className="hover:text-orange-400">
                <a href="/#" target="" rel="noopener noreferrer">
                  ติดต่อเรา
                </a>
              </li>
              <li className="hover:text-orange-400">
                <a href="/#" target="" rel="noopener noreferrer">
                  คำถามที่พบบ่อย
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
