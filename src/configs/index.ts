import dotenvConfig from './dotenvConfig';

dotenvConfig();

export default {
  PORT: process.env.PORT || 3003,
  SECRET: process.env.API_SECRET_KEY || 'secret',
  JWT_SECRET: process.env.JWT_SECRET,
  REFRESH_SECRET: process.env.API_REFRESH_SECRET || 'refresh-secret',
  API_SERVICES_URL: process.env.API_SERVICES_URL || 'http://localhost:3003',
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
    : ['http://localhost:3000', 'http://localhost:5173'], // adicione os que você usa
  GOVBR_URL: process.env.API_GOVBR_URL,
  GOVBR_REDIRECT_URL: process.env.API_GOVBR_REDIRECT_URL,
  GOVBR_CLIENT_ID: process.env.API_GOVBR_CLIENT_ID,
  GOVBR_CLIENT_SECRET: process.env.API_GOVBR_CLIENT_SECRET,
  URL_MEU_DETRAN: process.env.API_URL_MEU_DETRAN || ''
};