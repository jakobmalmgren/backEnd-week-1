import dotenv from "dotenv";
dotenv.config();

const config = {
  appName: process.env.APP_NAME,
  version: process.env.version,
  port: process.env.PORT || 3000,
};

export default config;
