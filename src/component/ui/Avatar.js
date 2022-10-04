import { Avatar } from "flowbite-react";
import React from "react";

function Avatan({ src }) {
  return <Avatar alt="User settings" img={src} rounded={true} />;
}

export default Avatan;
