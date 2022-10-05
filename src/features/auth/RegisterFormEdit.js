import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { useLoading } from "../../contexts/LoadingContext";
import {
  validateEdit,
  validateEdits,
} from "../../validations/userEditValidate";

function RegisterFormEdit() {
  //context => props = {user, register}
  const { register } = useAuth();
  const navigate = useNavigate();
  const { startLoading, stopLoading } = useLoading();
  const [inputEdit, setInputEdit] = useState({
    password: "",
    confirmpassword: "",
    Newpassword: "",
  });

  const handleChangeInput = (e) => {
    setInputEdit({ ...inputEdit, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    //validate data
    if (!inputEdit.Newpassword.trim()) {
      const { error } = validateEdit({ password: inputEdit.password });

      if (error) {
        // console.dir(error);
        // console.log(error.ValidationError);

        // console.log(error.message);
        return toast.error(error.message[0]);
      }
      // try {
      //   startLoading();
      //   await register(inputEdit);
      //   toast.success("success register");
      //   navigate("/");
      // } catch (err) {
      //   // res ถ้าเออเร่อ มันจะส่งเป็น err กลับมา
      //   toast.error(err.response.data.message);
      // } finally {
      //   stopLoading();
      // }
    } else {
      const { error } = validateEdits(inputEdit);

      if (error) {
        // console.dir(error);
        // console.log(error.ValidationError);

        // console.log(error.message);
        return toast.error(error.message);
      }
      // try {
      //   startLoading();
      //   await register(inputEdit);
      //   toast.success("success register");
      //   navigate("/");
      // } catch (err) {
      //   // res ถ้าเออเร่อ มันจะส่งเป็น err กลับมา
      //   toast.error(err.response.data.message);
      // } finally {
      //   stopLoading();
      // }
    }
  };
  return (
    <form
      className="flex flex-col gap-4 w-2/4 mx-auto my-10"
      onSubmit={handleSubmitForm}
    >
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
          value={inputEdit.password}
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="Newpassword" value="New Password" />
        </div>
        <TextInput
          id="Newpassword"
          type="password"
          name="Newpassword"
          placeholder="Your New Password"
          value={inputEdit.Newpassword}
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
          value={inputEdit.confirmpassword}
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
            setInputEdit({
              password: "",
              confirmpassword: "",
              Newpassword: "",
            })
          }
        >
          Reset
        </Button>
      </div>
    </form>
  );
}

export default RegisterFormEdit;
