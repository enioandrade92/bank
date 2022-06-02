const Joi = require('joi');

const singInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const singUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  firtName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
});

const pixValueSchema = Joi.object({
  value: Joi.number().positive().required(),
});

module.exports = {
  async singIn(body) {
    try {
      const result = await singInSchema.validateAsync(body);
      return result;
    } catch (error) {
      const err = new Error(error.message);
      err.name = 'bad_request';
      throw err;
    }
  },

  async singUp(body) {
    try {
      const result = await singUpSchema.validateAsync(body);
      return result;
    } catch (error) {
      const err = new Error(error.message);
      err.name = 'bad_request';
      throw err;
    }
  },

  async pixValue(body) {
    try {
      if (typeof body.value === 'string') throw Error('Only numbers are accepted');
      const result = await pixValueSchema.validateAsync(body);
      return result;
    } catch (error) {
      const err = new Error(error.message);
      err.name = 'bad_request';
      throw err;
    }
  },
};
