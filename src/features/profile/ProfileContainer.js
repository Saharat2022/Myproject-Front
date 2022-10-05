import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import RegisterFormEdit from "../auth/RegisterFormEdit";

function ProfileContainer() {
  const {
    user: { profileImage },
  } = useAuth();
  const [file, setFile] = useState(null);

  const inputEl = useRef();
  return (
    <div className="justify-center flex h-full bg-gray-300 ">
      <div className="border-black border-2 flex mb-50 flex-col items-center  w-[50vw] rounded-lg mt-20 shadow-lg">
        <span className="mt-10 text-xl font-bold mx-auto">EditForm</span>
        <div
          className=" p-7  flex flex-col justify-center mt-10 items-center border-r bg-indigo-200  border-4 rounded-l-lg cursor-pointer"
          onClick={() => inputEl.current.click()}
        >
          <input
            type="file"
            className="hidden"
            ref={inputEl}
            onChange={(e) => {
              console.dir(e);
              // file อาจจะเป็น undefined ได้ ถ้าเขากด cancel
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />

          {file ? (
            <>
              <img
                className="w-full h-full"
                src={URL.createObjectURL(file)}
                alt="profile"
                sizes="xs"
              />
            </>
          ) : (
            <>
              <img
                src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-PNG-Photos.png"
                className="rounded-full shadow-sm w-12 h-12"
                alt="addpicture"
              />
            </>
          )}
          <span>upload picture</span>
        </div>
        <RegisterFormEdit />
      </div>
    </div>
  );
}

export default ProfileContainer;
