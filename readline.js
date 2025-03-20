import readline from "readline-sync";
import fs from "fs";
console.log(readline);

const fileName = readline.question("vad vill du filnamnet ska heta?");
console.log("din nya fil heter:", fileName);
// console.log(typeof fileName);

const input = readline.question("vad ska innehållet i filen?");
console.log("innehållet:", input);

fs.writeFile(fileName, input, { encoding: "utf8" }, (err) => {
  if (err) {
    console.log(err);
  }
});
