import React from "react";
import { useAdmin } from "../../contexts/AdminContext";

import CardFooter from "../CardFooter";
import CardHeader from "../CardHeader";
import CardTitle from "../CardTitle";

function Cards() {
  const { allProduct, searchProduct } = useAdmin();

  return (
    <>
      <div className="mt-2 flex justify-between flex-wrap p-4">
        {allProduct
          .filter((item) =>
            item.nameProduct.includes(searchProduct.toLowerCase())
          )
          .map((item) => {
            return (
              <div
                key={item.id}
                className="w-max h-max p-5 m-3 flex flex-col relative border-red-600 border-4 rounded-md"
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
