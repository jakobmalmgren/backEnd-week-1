import fs from "fs";
console.log(fs);

const quote = "hej hopp!";

fs.writeFile("text.txt", quote, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("quote saved");
  }
});

// skapar fil och lägger in innehåll som text

fs.readFile("text.txt", "utf8", (err, content) => {
  if (err) {
    console.log(err);
  } else {
    console.log("content:", content);
  }
});

//läser filen o skriver ut innehållet
