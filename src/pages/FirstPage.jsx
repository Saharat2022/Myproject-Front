import { Button, Carousel } from "flowbite-react";
import React from "react";
import Card from "../component/firstpage/card";

function FirstPage() {
  return (
    <div className="">
      {/* <div className="sm:h-64 xl:h-80 2xl:h-96 w-11/12 mx-auto mt-3 border-red-600 border-2 "> */}
      <div className=" w-10/12 mx-auto mt-3  ">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96  shadow-2xl">
          <Carousel>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 1
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 2
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              Slide 3
            </div>
          </Carousel>
        </div>
      </div>
      <div className="w-11/12 border-red-600 border-2 mx-auto ">
        <div className="w-5/6 mx-auto my-4 flex justify-between">
          <div className="">
            <p className="  font-bold text-xl drop-shadow-2xl shadow-black">
              About Us
            </p>
            <p className="border-gray-300 border-t-4 mt-1 w-3/5"></p>
          </div>
          <div className="w-10/12 mt-8">
            <p className="text-right">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
              earum aperiam! Cupiditate ut harum et impedit fugiat unde amet
              mollitia quidem at ex commodi, obcaecati dicta voluptas, iusto
              dolore veniam.
            </p>

            <p className=" text-right flex justify-end mt-2">
              <Button outline={true} gradientDuoTone="purpleToBlue">
                Read More
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 border-red-600 border-2 mx-auto ">
        <div className=" w-5/6 mx-auto my-4  ">
          <div className="border-red-900 border-2  flex  flex-col justify-items-start items-end">
            <p className=" border-red-600 border-2 font-bold text-xl drop-shadow-2xl shadow-black ">
              Our Courses
            </p>
            <p className="border-gray-300 border-t-4 mt-1 w-11"></p>
          </div>
          <Card />
          <p className=" text-right flex justify-end mt-2">
            <Button outline={true} gradientDuoTone="purpleToBlue">
              Read More
              <svg
                className="ml-2 -mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
