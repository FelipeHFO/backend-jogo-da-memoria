import * as Joi from 'joi';

export const validationSchema = Joi.object({
  API_PORT: Joi.number().required(),
  TYPEORM_PORT: Joi.number().required(),
  TYPEORM_LOGGING: Joi.bool().required(),
  TYPEORM_HOST: Joi.string().required(),
  TYPEORM_USERNAME: Joi.string().required(),
  TYPEORM_PASSWORD: Joi.string().required(),
  TYPEORM_CONNECTION: Joi.string().required(),
  TYPEORM_MIGRATIONS_RUN: Joi.bool().required(),
  TYPEORM_DATABASE: Joi.string().required(),
  TYPEORM_ENTITIES: Joi.string().required(),
  TYPEORM_MIGRATIONS_DIR: Joi.string().required(),
  TYPEORM_MIGRATIONS: Joi.string().required(),
  JWT_DEFAULT_STRATEGY: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.number().required(),
  JWT_SECRET_KEY: Joi.string().required(),
});
