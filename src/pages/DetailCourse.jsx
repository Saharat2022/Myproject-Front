import { Button } from "flowbite-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as adminService from "../api/adminApi";

function DetailCourse() {
  const [oneItem, setoneItem] = useState({});

  const { id } = useParams();

  console.log(oneItem);
  useEffect(() => {
    const item = async (id) => {
      const res = await adminService.getOneIdEdit(id);
      setoneItem(res.data.Itemedit);
    };
    item(id);
  }, [id]);
  console.log(oneItem);

  return (
    <div>
      <div className=" h-full w-3/4 mx-auto p-2 my-14">
        <span className="text-2xl font-bold py-2 ">{oneItem.nameProduct}</span>
        <div className=" border-gray-300 border-b-4 mt-2 w-[48px]"></div>
        <div className="flex justify-center items-center w-[300px] h-full mx-auto mt-4 font-medium border-white rounded-md border-2 shadow-lg">
          <img src={`${oneItem.courseImg}`} alt={`product${id}`} />
        </div>
        <div className=" mt-14 text-lg font-bold p-4">
          รายละเอียด :
          <p className="text-md font-normal indent-6">
            {oneItem.descriptionCourse}
          </p>
        </div>
        <div className=" mt-5 text-lg font-bold p-4">
          ราคา : &nbsp;
          <span className="text-md font-normal">{oneItem.priceProduct}</span>
          &nbsp; THB
        </div>
        <div className="border-2 border-gray-40 rounded-lg mt-5 text-lg h-full font-bold p-4">
          สิ่งที่จะได้จากครอสนี้ :
          <p className="text-md font-normal indent-5">
            &nbsp;{oneItem.descriptionLast}
          </p>
        </div>
        <Link to="/course" className="flex justify-end mt-20">
          <Button type="button" gradientDuoTone="greenToBlue">
            Buy now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default DetailCourse;

// CategoryId
// :
// 1
// courseImg
// :
// "https://res.cloudinary.com/dbn6khslm/image/upload/v1665319223/null.webp"
// courseLink
// :
// "null"
// createdAt
// :
// "2022-10-09T11:46:33.000Z"
// descriptionCourse
// :
// "edit course detail"
// descriptionLast
// :
// ""
// id
// :
// 18
// inventory
// :
// 0
// nameProduct
// :
// "tryttt"
// priceProduct
// :
// 520;
