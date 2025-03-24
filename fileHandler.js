import { readFileSync, writeFileSync } from "fs";
const name = "jakob";

const createFileWithContent = (file, content) => {
  console.log("skapar fil med content");

  writeFileSync(file, content);
};

const readContent = (file) => {
  console.log("läser av filen");

  console.log(readFileSync(file, "utf8"));
};

createFileWithContent("jappe.txt", name);
readContent("jappe.txt");
