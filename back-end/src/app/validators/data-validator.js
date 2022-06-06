const Joi = require('joi');

const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  firtName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
});

const pixValueSchema = Joi.object({
  value: Joi.number().positive().required(),
});

module.exports = {
  async signIn(body) {
    try {
      const result = await signInSchema.validateAsync(body);
      return result;
    } catch (error) {
      const err = new Error(error.message);
      err.name = 'bad_request';
      throw err;
    }
  },

  async signUp(body) {
    try {
      const result = await signUpSchema.validateAsync(body);
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
