import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

function RegisterPage() {
  return (
    <div>
      <div className="w-3/6 mx-auto  mb-80">
        <form className="flex flex-col gap-4 w-2/4 mx-auto my-10">
          <span className="text-xl font-bold mx-auto">Register</span>
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
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirmpassword" value="Confirm Password" />
            </div>
            <TextInput
              id="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="firstname" value="Firstname" />
            </div>
            <TextInput
              id="firstname"
              type="text"
              placeholder="Your Firstname"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="lastname" value="Lastname" />
            </div>
            <TextInput
              id="lastname"
              type="text"
              placeholder="Your Lastname"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="Your Email"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Tel" />
            </div>
            <TextInput
              id="phone"
              type="text"
              placeholder="Your Phone"
              required={true}
            />
          </div>

          <div className=" inline-flex justify-center gap-10">
            <Button type="submit" size="xs">
              Submit
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

export default RegisterPage;
