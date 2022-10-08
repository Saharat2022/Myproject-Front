import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAdmin } from "../contexts/AdminContext";
import { useAuth } from "../contexts/AuthContext";

import Moda from "./Modal";

function CardTitle({ product: { nameProduct, priceProduct, id } }) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" flex p-2 items-center">
        <div className=" flex  flex-col justify-center">
          <div className="text-[18px] mt-3 font-semibold">{nameProduct}</div>
          <div className="text-md ">Price: {priceProduct} THB</div>
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
            <Moda open={open} close={() => setOpen(false)} id={id} />
          </div>
        ) : (
          false
        )}
      </div>
    </>
  );
}

export default CardTitle;
