import Joi from "@hapi/joi";
//
export const newNotesValidator = (req, res, next) => {
    const schema = Joi.object({
        userId: Joi.string().optional(),
        noteId: Joi.string().optional(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        colour: Joi.string().optional()
    });
    const{ error, value } = schema.validate(req.body);
    if(error){
        next(error);
    }else{
        next();
    }
};