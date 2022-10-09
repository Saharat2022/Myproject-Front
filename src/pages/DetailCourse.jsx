import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as adminService from "../api/adminApi";

function DetailCourse() {
  const [oneItem, setoneItem] = useState({});

  const { id } = useParams();

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
      <div className="border-red-400 border-2 h-full w-3/4 mx-auto p-2 ">
        <div className="w-2/4 h-full mx-auto mt-4 border-red-400 border-2">
          <img src={`${oneItem.courseImg}`} alt={`product${id}`} />
        </div>
        <span>{oneItem.nameProduct}</span>
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
