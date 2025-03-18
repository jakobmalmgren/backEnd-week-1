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
// fs.writeFile ersätter o skriver alltid över de som finns
// i text.txt så skriver ja nåt i den filen o kör
// writefile kör den över de..

fs.readFile("text.txt", "utf8", (err, content) => {
  if (err) {
    console.log(err);
  } else {
    console.log("content:", content);
  }
});

//läser filen o skriver ut innehållet
