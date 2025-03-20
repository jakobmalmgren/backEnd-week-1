import fs from "fs";

fs.readFile("insults.json", "utf8", (err, content) => {
  //får in de som JSON men de är en sträng under huven så är ok!
  if (err) {
    console.log(err);
  } else {
    console.log("insults som JSON:", content);
    const insults = JSON.parse(content);
    //använder parse för behöver till ett OBJEKT så ja kan köra Object.keys för o få ut antalen keys i en array
    // sen köra. length på de..
    // console.log("insults som obj", insults);
    // const insultsString = JSON.stringify(insults, null, 2);
    fs.writeFile("convertedInsults.txt", content, "utf8", (err) => {
      if (err) {
        console.log(err);
      } else {
        const numberOfInsults = Object.keys(insults).length;
        console.log(numberOfInsults);
      }
    });
  }
});
