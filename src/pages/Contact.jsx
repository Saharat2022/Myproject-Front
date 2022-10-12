import { Textarea } from "flowbite-react";
import React from "react";

function Contact() {
  return (
    <div>
      <div className="w-3/4  mx-auto h-full p-4 my-16">
        <div className="w-full text-center text-2xl font-bold">Contact Us</div>
        <p className="border-t-[5px] border-gray-400 w-[60px] ml-[520px] mt-2"></p>
        <div className="flex justify-between p-4 mt-14">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/724/724664.png?w=360"
              alt="Tel"
              className="w-[50px] h-[50px] mx-auto"
            ></img>
            <p className="my-2 mt-4 mx-auto text-md font-bold">
              Tel : 0931246568 , 027777888
            </p>
            <p className="mx-auto  font-bold">Mon - Fri ( 9.00 - 18.00 PM )</p>
            <p></p>
          </div>
          <div className="">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/message-icon-design-template-ff734aad72da096f0e49f3d693042135_screen.jpg?ts=1581057128"
              alt="message"
              className="w-[70px] h-[70px] mx-auto"
            ></img>
            <p className="font-bold">Email : 0.05TutorHub@hotmail.com</p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/originals/29/93/fd/2993fd151e2e1cab871aec155e22cbcc.png"
              alt="location"
              className="w-[70px] h-[70px] mx-auto"
            ></img>
            <p className="font-bold">Location : B Building Floor 8 room 801</p>
          </div>
        </div>
        <div className=" mt-10 flex justify-center gap-[120px]">
          <div className="flex items-center ">
            <iframe
              id="inlineFrameExample"
              title="Inline Frame Example"
              width="300"
              height="250"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004016564%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
              className="border-2 border-gray-400 rounded"
            ></iframe>
          </div>
          <div className="my-8">
            <form className="flex flex-col">
              <input
                placeholder="Your Name"
                className="px-2 py-1 border-2 border-gray-400 rounded-md w-72 my-2"
              />
              <input
                placeholder="Your Email"
                className="px-2 py-1 border-2 border-gray-400 rounded-md w-72 my-2"
              />
              <input
                placeholder="Topic"
                className="px-2 py-1 border-2 border-gray-400 rounded-md w-72 my-2"
              />

              <textarea
                placeholder="Message"
                className="px-2 py-1 border-2 border-gray-400 rounded-md  my-2  h-[90px]"
                rows="4"
                cols="10"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
