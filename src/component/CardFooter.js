import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function CardFooter({ product: { nameProduct, priceProduct, id } }) {
  const { user } = useAuth();
  return (
    <>
      <div className="flex justify-between mx-2">
        <Link to={`/course/${id}`}>
          <Button gradientMonochrome="info" size="xs">
            Details
          </Button>
        </Link>

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
