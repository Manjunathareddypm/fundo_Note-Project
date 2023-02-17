import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().regex(/^[a-zA-Z]{3,30}$/).required(),
    lastName: Joi.string().regex(/^[a-zA-Z]{3,30}$/).required(),
    email: Joi.string().min(4).email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{8}$/).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    next();
  }
};
