import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useLoading } from "../../contexts/LoadingContext";
import { toast } from "react-toastify";

function LoginForm() {
  const [input, setInput] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();
  const { startLoading, stopLoading } = useLoading();
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //checkemail+password => backend validate เอง
    try {
      startLoading();
      await login(input);
      toast.success("success login");
      //success : rederect to firstpage
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };
  return (
    <form
      className="flex flex-col gap-4 w-2/4 mx-auto my-10"
      onSubmit={handleSubmit}
    >
      <span className="text-xl font-bold mx-auto">Login</span>
      <div>
        <div className="mb-2 block ">
          <Label htmlFor="username" />
        </div>
        <TextInput
          id="username"
          type="text"
          name="username"
          placeholder="Your Username"
          required={true}
          className="text-xs"
          value={input.username}
          onChange={handleChangeInput}
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
      <div className="flex items-center gap-2">
        <Checkbox id="remember" required />
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
  );
}

export default LoginForm;
