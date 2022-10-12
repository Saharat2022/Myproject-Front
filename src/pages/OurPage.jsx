import React from "react";

function OurPage() {
  return (
    <div className="mx-auto my-[80px]">
      <div className="w-3/4 mt-6 mx-auto ">
        <img
          src="https://entertain.teenee.com/kpop/img5/1057774.jpg"
          alt=".."
          className="mx-auto"
        />
      </div>
      <div className=" text-center text-4xl  my-6">
        เปิดตัวครูคนใหม่ 2025 มากประสบการณ์สอนกว่า 40 ปี เร็วๆนี้
      </div>
      <div className="w-3/4 mt-6 mx-auto ">
        <span className=" text-start border-b-4 text-2xl border-b-gray-400 p-1">
          เเนะนำอาจารย์
        </span>
      </div>
      <div className="w-3/4 mt-6 mx-auto mb-32">
        <span>อาจารย์ Ohmy เกียรตินิยมอันดับ 1 จาก Codecamp University</span>
        <br />
        <span>อาจารย์ Bally เกียรตินิยมอันดับ 2 จาก Campcode University</span>
      </div>
    </div>
  );
}

export default OurPage;
