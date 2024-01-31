import { Joi } from "express-validation";

export const updateValidation = Joi.object({
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  email: Joi.string().email().optional()
});
