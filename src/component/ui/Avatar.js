import { Avatar } from "flowbite-react";
import React from "react";
// import profileUser from "../../asset/image/profileUser.png";

function Avatan({ src }) {
  console.log(src);
  return (
    <Avatar alt="User settings" img={src} rounded={true} />
    // <Avatar alt="User settings" img={src || profileImage} rounded={true} />
  );
}

export default Avatan;
