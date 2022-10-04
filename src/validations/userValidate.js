import Joi from "joi";

const registerschema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string()
    .pattern(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}/)
    .required(),
  confirmpassword: Joi.ref("password"),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phone: Joi.string(),
}).with("password", "confirmpassword");

export const validateRegister = (input) =>
  registerschema.validate(input, { abortEarly: false });
