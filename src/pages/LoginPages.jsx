import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPages() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    //checkemail+password

    //success : rederect to firstpage
    navigate("/");
  };
  return (
    <div>
      <div className="w-3/6 mx-auto  mb-80">
        <form
          className="flex flex-col gap-4 w-2/4 mx-auto my-10"
          onSubmit={handleSubmit}
        >
          <span className="text-xl font-bold mx-auto">Login</span>
          <div>
            <div className="mb-2 block ">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username"
              type="text"
              placeholder="Your Username"
              required={true}
              className="text-xs"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="Your Password"
              required={true}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <div className=" inline-flex justify-center gap-10">
            <Button type="submit" size="xs">
              Login
            </Button>
            <Button type="reset" size="xs">
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPages;
