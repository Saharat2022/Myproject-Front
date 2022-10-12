import React from "react";
import { useAdmin } from "../contexts/AdminContext";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardTitle from "./CardTitle";

function CardFirstpage() {
  const { allProduct, searchProduct } = useAdmin();
  return (
    <div className="flex justify-between flex-wrap border-pink-600 border-3 p-10">
      {allProduct
        .filter((item) =>
          item.nameProduct.includes(searchProduct.toLowerCase())
        )
        .slice(0, 3)
        .map((item) => {
          return (
            <div
              key={item.id}
              className="border-[4px] rounded-xl w-max h-max p-5 m-3 flex flex-col relative border-red-600"
            >
              <CardHeader product={item} />
              <CardTitle product={item} />
              <CardFooter product={item} />
            </div>
          );
        })}
    </div>
  );
}

export default CardFirstpage;
