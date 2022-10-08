import React from "react";
import { useAdmin } from "../../contexts/AdminContext";

import CardFooter from "../CardFooter";
import CardHeader from "../CardHeader";
import CardTitle from "../CardTitle";

function Cards() {
  const { allProduct } = useAdmin();
  console.log(allProduct);
  return (
    <>
      <div className="mt-2 flex justify-start flex-wrap border-pink-600 border-3">
        {allProduct.map((item) => {
          return (
            <div
              key={item.id}
              className="border w-max h-max p-5 m-3 flex flex-col relative border-red-500"
            >
              <CardHeader product={item} />
              <CardTitle product={item} />
              <CardFooter product={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
