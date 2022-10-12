import { Button, Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import CardFirstpage from "../component/CardFirstpage";

function FirstPage() {
  return (
    <div className="">
      {/* <div className="sm:h-64 xl:h-80 2xl:h-96 w-11/12 mx-auto mt-3 border-red-600 border-2 "> */}
      <div className=" w-10/12 mx-auto mt-3  ">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 shadow-2xl">
          <Carousel>
            <img
              src="https://www.bathcollege.ac.uk/sites/default/files/2022-07/education-and-teaching-header.jpg"
              alt="..."
              className="shadow-2xl"
            />
            <img
              src="https://youthincmag.com/wp-content/uploads/2020/07/LinkedIn.jpeg"
              alt="..."
              className="shadow-2xl"
            />
            <img
              src="https://as2.ftcdn.net/v2/jpg/05/08/10/35/1000_F_508103536_CcPi2Vr2iOaoh5nGMi8HFbcxRFt8ygIg.jpg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>

      <div className="w-11/12  mx-auto">
        <div className="w-5/6 mx-auto my-4  flex justify-between">
          <div className="">
            <p className="  font-bold text-xl drop-shadow-2xl shadow-black">
              About Us
            </p>
            <p className="border-gray-300 border-t-4 mt-1 w-3/5"></p>
          </div>
          <div className="w-10/12 mt-8">
            <p className="text-right font-medium text-base">
              !! Welcome !! พวกเราคือ TUTOR HUB
              ผู้มีประสบการณ์สอนคณิตศาสตร์เเละสถิติกว่า 10 ปี
              พวกเราจะทำให้คณิตศาสตร์เป็นเรื่อง easy สำหรับทุกคน
              พวกเรามีผู้เชี่ยวชาญควรตอบคำถาม 24 ชั่วโมง ทุกโจทย์ ทุกปัญหา
              ทุกข้อสงสัย ทุกปัญหา TUTORHUB มีคำตอบให้พวกคุณ
            </p>

            <p className=" text-right flex justify-end mt-10">
              <Link to="/our">
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
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="w-11/12  mx-auto ">
        <div className="mx-auto border-t-[3px] border-gray-400 w-3/12 mt-10"></div>
        <div className=" w-5/6 mx-auto my-2  ">
          <div className="  flex  flex-col justify-items-start items-end">
            <p className="  font-bold text-xl drop-shadow-2xl shadow-black ">
              Our Courses
            </p>
            <p className="border-gray-300 border-t-4 mt-1 w-11"></p>
          </div>

          <CardFirstpage />
          <p className=" text-right flex justify-end mt-2">
            <Link to="/course">
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
            </Link>
          </p>
        </div>
      </div>

      <div className="w-11/12  mx-auto  ">
        <div className="mx-auto border-t-[3px] border-gray-400 w-3/12 mt-3"></div>
        <div className="w-5/6 mx-auto my-4 flex flex-col">
          <div className="">
            <p className="  font-bold text-xl drop-shadow-2xl shadow-black">
              Portfolio
            </p>
            <p className="border-gray-300 border-t-4 mt-1 w-[53px]"></p>
          </div>
          <div className="mt-3  p-4 flex gap-4">
            <div className=" bg-slate-400 h-[200px] w-52 object-cover rounded-md border-2">
              <img
                src="image/PortFolio/teach1.jpg"
                className="w-full h-full rounded-md border-2"
              />
            </div>
            <div className=" bg-slate-400 h-[200px] w-52 object-cover rounded-md border-2">
              <img
                src="image/PortFolio/teach1.jpg"
                className="w-full h-full rounded-md border-2"
              />
            </div>
            <div className=" bg-slate-400 h-[200px] w-52 object-cover rounded-md border-2">
              <img
                src="image/PortFolio/teach1.jpg"
                className="w-full h-full rounded-md border-2"
              />
            </div>
            <div className=" bg-slate-400 h-[200px] w-52 object-cover rounded-md border-2">
              <img
                src="image/PortFolio/teach1.jpg"
                className="w-full h-full rounded-md border-2"
              />
            </div>
            <div className=" bg-slate-400 h-[200px] w-52 object-cover rounded-md border-2">
              <img
                src="image/PortFolio/teach1.jpg"
                className="w-full h-full rounded-md border-2"
              />
            </div>
          </div>
          <div className="w-full mt-4 flex justify-end">
            <Link to="/">
              <p>
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
            </Link>
          </div>
        </div>
      </div>

      <div className="w-11/12   mx-auto ">
        <div className="mx-auto border-t-[3px] border-gray-400 w-3/12 "></div>
        <div className="w-5/6 mx-auto my-4 flex flex-col">
          <div>
            <p className="  font-bold text-xl drop-shadow-2xl shadow-black">
              News
            </p>
            <p className="border-gray-300 border-t-4 mt-1 w-[53px]"></p>
          </div>
          <div className="  mt-3  p-4 flex gap-4">
            <div className=" h-[320px] w-72 border-black border-2 rounded-lg">
              <a href="https://www.posn.or.th/examination">
                <p className=" rounded-t-lg h-[180px] px-2">
                  <img
                    src="https://www.posn.or.th/wp-content/uploads/2019/02/posn-thumb-512x340.png"
                    alt="NEWS1"
                    className="border-2 rounded-t-lg border-none shadow-md"
                  />
                </p>
                <p className=" mt-9 p-1 text-md text-left px-2">
                  สมัครสอบเเละข้อสอบ สอวน. ปี 2565
                </p>
                <div className="flex justify-end mb-10 mt-6 px-2">
                  <Button outline={true} gradientDuoTone="purpleToPink">
                    Learn More
                  </Button>
                </div>
              </a>
            </div>
            <div className=" h-[320px] w-72 border-black border-2 rounded-lg ml-6 ">
              <a href="https://trumpexcel.com/bell-curve/">
                <p className=" rounded-t-lg h-[180px] px-2 mt-6">
                  <img
                    src="https://sphweb.bumc.bu.edu/otlt/MPH-Modules/PH717-QuantCore/PH717-Module6-RandomError/Normal%20Distribution%20deviations.png"
                    alt="NEWS2"
                    className="border-2 rounded-t-lg border-none shadow-md"
                  />
                </p>
                <p className=" mt-5 p-1 text-md text-left px-2 font-medium">
                  What is Normal Distribution ?
                </p>
                <div className="flex justify-end mb-10 mt-4 px-2">
                  <Button outline={true} gradientDuoTone="purpleToPink">
                    Learn More
                  </Button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
