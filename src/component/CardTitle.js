import { Button } from "flowbite-react";
import React, { useState } from "react";

import { useAuth } from "../contexts/AuthContext";
import Mymodal from "./Mymodal";

function CardTitle({ product }) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" flex p-2 items-center">
        <div className=" flex  flex-col justify-center">
          <div className="text-[18px] mt-3 font-semibold">
            {product.nameProduct}
          </div>
          <div className="text-md ">Price: {product.priceProduct} THB</div>
        </div>
        {user?.role === "admin" ? (
          <div className="  ml-5">
            <Button
              gradientDuoTone="purpleToBlue"
              size="xs"
              onClick={() => setOpen(true)}
            >
              Edit
            </Button>

            <Mymodal
              open={open}
              close={() => setOpen(false)}
              id={product.id}
              prod={product}
            />
          </div>
        ) : (
          false
        )}
      </div>
    </>
  );
}

export default CardTitle;
