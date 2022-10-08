import { Button } from "flowbite-react";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

function CardFooter({ product: { nameProduct, priceProduct } }) {
  const { user } = useAuth();
  return (
    <>
      <div className="flex justify-between mx-2">
        <Button gradientMonochrome="info" size="xs">
          Details
        </Button>

        {user?.role === "user" ? (
          <Button gradientDuoTone="pinkToOrange" size="xs">
            Add to cart
          </Button>
        ) : (
          false
        )}
      </div>
    </>
  );
}

export default CardFooter;
