import joi from "joi";

export default joi.object({
  id: joi.number().required(),
});
