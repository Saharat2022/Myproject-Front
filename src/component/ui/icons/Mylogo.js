import React from "react";

function Mylogo() {
  return (
    <div className="flex items-center  w-3/4 h-3/4">
      <div className="">
        <img src="/image/logo/pen.png" className="w-[70px] h-[70px]" />
      </div>
      <div className="relative w-2/4 h-2/4 text-3xl flex items-center -ml-5 -mb-1">
        <p className="font-semibold absolute top-1/4 left-0 text-red-600 ">
          TUTORHUB
        </p>
        <p className="font-semibold absolute text-red-400 top-1/4 left-[3px] ">
          TUTORHUB
        </p>
      </div>
    </div>
  );
}

export default Mylogo;
