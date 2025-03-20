import fs from "fs";
fs.readFile("index.html", "utf8", (err, content) => {
  if (err) {
    console.log(err);
  } else {
    console.log(content);
    fs.writeFile("htmlContent.txt", content, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
});
