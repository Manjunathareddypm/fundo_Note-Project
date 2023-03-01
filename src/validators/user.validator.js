import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().regex(/^[A-Z]{1,1}[a-z]{3,30}$/).required(),
    lastName: Joi.string().regex(/^[a-z[A-Z]{3,30}$/).required(),
    email: Joi.string().min(4).email().required(),
    password: Joi.string().regex(/^[a-z]{1,3}[A-Z]{1,1}[0-9]{1,4}$/).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    next();
  }
};