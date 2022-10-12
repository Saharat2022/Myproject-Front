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

function RegisterFormEdit({ file }) {
  //context => props = {user, register}
  const [changpassword, setChangePassword] = useState(false);
  const { updateUser, user } = useAuth();
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
        return toast.error(error.message);
      }

      try {
        startLoading();
        const formData = new FormData();
        formData.append("profileImage", file);
        formData.append("password", inputEdit.password);
        formData.append("firstName", user.firstName);
        formData.append("id", user.id);
        await updateUser(formData);
        setChangePassword(false);
        toast.success("success upload");
        navigate("/");
      } catch (err) {
        console.log(err);
        toast.error(err.response?.data.message);
      } finally {
        stopLoading();
      }
    } else {
      const { error } = validateEdits(inputEdit);

      if (error) {
        // console.dir(error);
        // console.log(error.ValidationError);

        // console.log(error.message);
        return toast.error(error.message);
      }
      try {
        startLoading();
        const formData = new FormData();
        formData.append("profileImage", file);
        formData.append("password", inputEdit.password);
        formData.append("Newpassword", inputEdit.Newpassword);
        formData.append("firstName", user.firstName);
        formData.append("id", user.id);
        await updateUser(formData);
        toast.success("success upload");
        navigate("/");
      } catch (err) {
        console.log(err);
        toast.error(err.response?.data.message);
      } finally {
        stopLoading();
      }
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
        <button
          type="button"
          onClick={() => setChangePassword(!changpassword)}
          className="border-2 p-2 rounded hover:border-red-400"
        >
          Change Password
        </button>
        {changpassword ? (
          <>
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
          </>
        ) : (
          ""
        )}
      </div>
      <div>
        {changpassword ? (
          <>
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
          </>
        ) : (
          ""
        )}
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
