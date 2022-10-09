import React from "react";
import { useAdmin } from "../../../contexts/AdminContext";

function Search() {
  const { search } = useAdmin();
  return (
    <>
      <div className="max-w-2xl mb-0 flex mx-11">
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
              name="search"
              className="h-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required=""
              onChange={(e) => search(e.target.value)}
            />
            <button
              type="button"
              className="flex absolute inset-y-0 right-0 items-center pr-3"
            ></button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;
