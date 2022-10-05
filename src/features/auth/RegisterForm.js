import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { useLoading } from "../../contexts/LoadingContext";
import { validateRegister } from "../../validations/userValidate";

function RegisterForm() {
  //context => props = {user, register}
  const { register } = useAuth();
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    //validate data
    const { error } = validateRegister(input);
    if (error) {
      // console.dir(error);
      // console.log(error.ValidationError);

      // console.log(error.message);
      return toast.error(error.message);
    }
    try {
      startLoading();
      await register(input);
      toast.success("success register");
      navigate("/");
    } catch (err) {
      // res ถ้าเออเร่อ มันจะส่งเป็น err กลับมา
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    <form
      className="flex flex-col gap-4 w-2/4 mx-auto my-10"
      onSubmit={handleSubmitForm}
    >
      <span className="text-xl font-bold mx-auto">Register</span>
      <div>
        <div className="mb-2 block  ">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput
          type="text"
          placeholder="Your Username"
          name="username"
          required={true}
          className="text-xs"
          value={input.username}
          onChange={handleChangeInput}
          // setInput({...input,lastName: e.target.value})
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput
          id="password"
          type="password"
          name="password"
          placeholder="Your Password"
          required={true}
          value={input.password}
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="confirmpassword" value="Confirm Password" />
        </div>
        <TextInput
          id="confirmpassword"
          type="password"
          name="confirmpassword"
          placeholder="Confirm Password"
          required={true}
          value={input.confirmpassword}
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="firstName" value="Firstname" />
        </div>
        <TextInput
          id="firstName"
          type="text"
          name="firstName"
          placeholder="Your Firstname"
          required={true}
          value={input.firstName}
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="lastName" value="Lastname" />
        </div>
        <TextInput
          id="lastName"
          type="text"
          name="lastName"
          placeholder="Your Lastname"
          required={true}
          value={input.lastName}
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          required={true}
          value={input.email}
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Phone" />
        </div>
        <TextInput
          id="phone"
          type="text"
          name="phone"
          placeholder="Your Phone"
          required={true}
          value={input.phone}
          onChange={handleChangeInput}
        />
      </div>

      <div className=" inline-flex justify-center gap-10">
        <Button type="submit" size="xs">
          Submit
        </Button>
        <Button
          type="reset"
          size="xs"
          onClick={() =>
            setInput({
              username: "",
              password: "",
              confirmpassword: "",
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
            })
          }
        >
          Reset
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
