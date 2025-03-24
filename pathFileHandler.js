// import fs from "fs";
// import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import fs from "fs";
import path from "path";

const writeFile = (fileName) => {
  const absolutePath = path.join(__dirname, fileName);
  //   console.log(absolutePath);
  console.log(!"PATH", path);

  fs.writeFileSync(absolutePath, "Hej från Node.js!");
  console.log("fil har skapats med text");
  return absolutePath;
};

const readFile = (absPath) => {
  const text = fs.readFileSync(absPath, "utf8");
  console.log("texten ifrån filen loggar ja:", text);
};

export { readFile, writeFile };
