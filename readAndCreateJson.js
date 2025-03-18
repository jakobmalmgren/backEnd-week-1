import fs from "fs";
const json = {
  name: "jakob",
  age: 37,
};
//----------------------------------------------//
// JSON.stringify() används här för att omvandla ett JavaScript-objekt (json) till en JSON-sträng.
//När du skriver till en fil med fs.writeFile, kan du bara skriva text (strängar) till filen. Eftersom json är ett JavaScript-objekt, kan det inte sparas direkt i en fil utan att omvandlas till en sträng.
//Om du inte använder JSON.stringify(), skulle du få ett fel eller ett obegripligt resultat i filen.

fs.writeFile("json.js", JSON.stringify(json), (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("json filen sparad");
  }
});
//-----------------------------------------------------//

//När du läser från filen med fs.readFile(), får du tillbaka innehållet som en textsträng, oavsett om filen innehåller JSON-data eller något annat.
//För att kunna använda de data du sparade i filen som ett JavaScript-objekt, måste du omvandla JSON-strängen tillbaka till ett objekt. Detta gör du med JSON.parse().

fs.readFile("json.js", "utf8", (err, content) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("content:", content);
    const parsedData = JSON.parse(content);
    console.log("content efter parsed", parsedData);
  }
});
