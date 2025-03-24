// import { logger } from "./log.js";
// import config from "./config.js";

// logger("jakob");

// console.log(
//   `Appname: ${config.appName},version: ${config.version}, port: ${config.port} `
// );
// console.log(process.env);

import { readFile, writeFile } from "./pathFileHandler.js";

const absPath = writeFile("NYtext.txt");
readFile(absPath);
