import Joi from "joi";

const editschema = Joi.object({
  password: Joi.string()
    .pattern(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}/)
    .required(),
});

const editschemas = Joi.object({
  password: Joi.string()
    .pattern(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}/)
    .required(),
  Newpassword: Joi.string()
    .pattern(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}/)
    .required(),
  confirmpassword: Joi.ref("Newpassword"),
}).with("Newpassword", "confirmpassword");

export const validateEdit = (input) =>
  editschema.validate(input, { abortEarly: false });

export const validateEdits = (input) =>
  editschemas.validate(input, { abortEarly: false });
