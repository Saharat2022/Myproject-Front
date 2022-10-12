import React from "react";
import { Link } from "react-router-dom";
import Mylogo from "../../component/ui/icons/Mylogo";

function Footers() {
  return (
    <div className="bg-white z-50  w-max-screen">
      <div className="bg-neutral-600 ">
        <div className="w-9/12 mx-auto flex justify-between items-start gap-14">
          <div className=" w-4/12 flex flex-col ">
            <div className=" flex justify-start mx-3">
              <Mylogo />
            </div>
            <div className=" text-white ml-7 my-4">
              <p>สำนักงานใหญ่ สมุทรปราการ</p>
              <p>เลขที่ 134/79 ต.บ้าบอ อ.งง</p>
              <p>จังหวัดมหาสุดยอด 10540</p>
            </div>
            <div className="  flex justify-start ml-7 mb-3">
              <img
                src="image/logo/facebook.png"
                alt="facebook"
                className="text-white h-[50px]"
              ></img>
            </div>
          </div>
          <div className="w-4/12">
            <div className="text-white flex-col justify-center">
              <p className="mt-5">INFORMATION</p>
              <p>TUTORHUB สถาบันการศึกษา</p>
              <p className="my-4">Tel : 0931246568 </p>
              <p>Mon-Fri (9.00-18.00 PM.)</p>
              <p>0.05TutorHub@hotmail.com</p>
            </div>
          </div>
          <div className=" w-4/12">
            <div className="text-white flex-col justify-center">
              <p className="mt-6">
                <Link to="/">หน้าเเรก</Link>
              </p>
              <p className="mt-2">
                <Link to="/course">คอร์สเรียน</Link>
              </p>
              <p className="mt-2">
                <Link to="/our">เกี่ยวกับเรา</Link>
              </p>
              <p className="mt-2">
                <Link to="/contact">ติดต่อเรา</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footers;
