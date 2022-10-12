import { Button, Label, Select, TextInput } from "flowbite-react";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../contexts/LoadingContext";
import { toast } from "react-toastify";
import * as adminService from "../api/adminApi";
import { useAdmin } from "../contexts/AdminContext";

function CreateCategoryPage() {
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const inputEl = useRef();
  const inputEl2 = useRef();
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();
  const { setNewProduct, allcategory } = useAdmin();
  const [input, setInput] = useState({
    nameProduct: "",
    descriptionCourse: "",
    priceProduct: 0,
    descriptionLast: "",
    type: "offline",
    inventory: 0,
    subject: "Math",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForms = async (e) => {
    e.preventDefault();

    try {
      startLoading();

      // await register(input);
      const formData = new FormData();
      if (!input.nameProduct) {
        return toast.error("Coursr name is require");
      }
      if (!input.descriptionCourse) {
        return toast.error("Deatail Course is require");
      }
      if (!input.priceProduct) {
        return toast.error("Price is require");
      }
      if (!file) {
        return toast.error("Picture product is require");
      }
      if (input.type === "online") {
        return input.inventory === 0 ? toast.error("Please input stock") : "";
      }

      formData.append("nameProduct", input.nameProduct);
      formData.append("descriptionCourse", input.descriptionCourse);
      formData.append("priceProduct", input.priceProduct);
      formData.append("descriptionLast", input.descriptionLast);
      formData.append("courseImg", file);
      formData.append("courseLink", file2);
      formData.append("type", input.type);
      formData.append("inventory", input.inventory);
      formData.append("subject", input.subject);
      console.log(formData);
      const res = await adminService.createProduct(formData);
      setNewProduct(res.data.item);
      toast.success("create success");
      setInput({
        nameProduct: "",
        descriptionCourse: "",
        priceProduct: 0,
        descriptionLast: "",
        type: "offline",
        inventory: 0,
        subject: "Math",
      });
      setFile(null);
      setFile2(null);

      toast.success("success create");
      navigate("/admin/course");
    } catch (err) {
      // res ถ้าเออเร่อ มันจะส่งเป็น err กลับมา
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="justify-center flex h-full bg-gray-300 ">
      <div className="border-black border-2 flex mb-50 flex-col items-center  w-3/4  rounded-lg mt-20 shadow-lg mb-20">
        <span className="mt-10 text-xl font-bold mx-auto">Create Category</span>
        <form onSubmit={handleSubmitForms}>
          <div className="flex justify-center ">
            <div
              className=" p-7  flex flex-col justify-center mt-10 items-center border-r bg-indigo-200  rounded-l-lg cursor-pointer border-red-200 border-2 w-2/4"
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
                <img
                  className="w-full h-full"
                  src={URL.createObjectURL(file)}
                  alt="profile"
                  sizes="xs"
                />
              ) : (
                <>
                  <img
                    src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-PNG-Photos.png"
                    className="rounded-full shadow-sm w-12 h-12"
                    alt="addpicture"
                  />
                </>
              )}

              <span className="text-xm font-medium">Upload picture</span>
            </div>
          </div>
          <div className=" w-[500px] mx-auto">
            <div className="flex flex-col items-start m-4  gap-3">
              <div className="w-1/4 ">
                <Label htmlFor="nameProduct" value="Course name :" />
              </div>
              <div className="w-full">
                <TextInput
                  type="text"
                  placeholder="Your Course name"
                  name="nameProduct"
                  required={true}
                  className="text-xs"
                  value={input.username}
                  onChange={handleChangeInput}
                  // setInput({...input,lastName: e.target.value})
                />
              </div>
            </div>
            <div className="flex flex-col items-start m-4  gap-3">
              <div className="w-1/4 ">
                <Label htmlFor="descriptionCourse" value="Deatail Course :" />
              </div>
              <div className="w-full">
                <TextInput
                  id="descriptionCourse"
                  type="text"
                  name="descriptionCourse"
                  placeholder="Your Deatail Course"
                  required={true}
                  value={input.descriptionCourse}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="flex flex-col items-start m-4  gap-3">
              <div className="block w-1/4">
                <Label htmlFor="priceProduct" value="Price :" />
              </div>
              <div className="w-full">
                <TextInput
                  id="priceProduct"
                  type="text"
                  name="priceProduct"
                  placeholder="Your Price"
                  required={true}
                  value={input.priceProduct}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="flex flex-col items-start m-4  gap-3">
              <div className=" block w-1/4">
                <Label htmlFor="descriptionLast" value="Detail Coures 2 :" />
              </div>
              <div className="w-full">
                <TextInput
                  id="descriptionLast"
                  type="text"
                  name="descriptionLast"
                  placeholder="Your Detail Coures 2"
                  value={input.descriptionLast}
                  onChange={handleChangeInput}
                />
              </div>
            </div>

            <div className="flex flex-col items-start m-4  gap-3">
              <div className="mb-2 block w-1/4">
                <Label htmlFor="courseLink" value="Video :" />
              </div>
              <div className="w-full">
                <input
                  type="file"
                  ref={inputEl2}
                  onChange={(e) => {
                    console.dir(e);
                    // file อาจจะเป็น undefined ได้ ถ้าเขากด cancel
                    if (e.target.files[0]) {
                      setFile2(e.target.files[0]);
                    }
                  }}
                />
                <div className="w-1/4 mt-3 h-1/4">
                  {file2 ? (
                    <img
                      className="w-full h-full"
                      src={URL.createObjectURL(file2)}
                      alt="Link"
                      sizes="xs"
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start m-4  gap-3">
              <div className="block w-1/4">
                <Label htmlFor="type" value="Type :" />
              </div>
              <div className="w-full">
                <Select
                  id="type"
                  name="type"
                  required={true}
                  value={input.type}
                  onChange={handleChangeInput}
                >
                  <option value="offline">Offline</option>
                  <option value="online">Online</option>
                </Select>
              </div>
            </div>

            {input.type === "online" ? (
              <div className="flex flex-col items-start m-4  gap-3">
                <div className="mb-2  w-1/4">
                  <Label htmlFor="inventory" value="Stock :" />
                </div>
                <div className="w-full">
                  <TextInput
                    id="inventory"
                    type="text"
                    name="inventory"
                    placeholder="Your Stock"
                    required={true}
                    value={input.inventory}
                    onChange={handleChangeInput}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="flex flex-col items-start m-4  gap-3">
              <div className="block w-1/4">
                <Label htmlFor="subject" value="Subject :" />
              </div>
              <div className="w-full">
                <Select
                  id="subject"
                  name="subject"
                  value={input.subject}
                  onChange={handleChangeInput}
                >
                  {allcategory.map((item) => (
                    <option key={item.id} value={item.subject}>
                      {item.subject}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="flex justify-center items-start m-5">
              <div className="flex justify-start gap-5">
                <Button type="submit" size="xs">
                  Submit
                </Button>
                <Button
                  type="reset"
                  size="xs"
                  onClick={() => {
                    setInput({
                      nameProduct: "",
                      descriptionCourse: "",
                      priceProduct: 0,
                      descriptionLast: "",
                      type: "offline",
                      inventory: 0,
                      subject: "Math",
                    });
                    setFile(null);
                    setFile2(null);
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCategoryPage;
