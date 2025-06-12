import cors from 'cors';
import configs from '.';

export const configureCors = () => {
  return cors({
    origin: (origin, callback) => {
      if (!origin || configs.ALLOWED_ORIGINS.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  });
};
