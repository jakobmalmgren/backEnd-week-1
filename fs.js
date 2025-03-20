import fs from "fs";
// console.log(fs);

// const quote = "hej hopp!";

// fs.writeFile("text.txt", quote, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("quote saved");
//   }
// });

// // skapar fil och lägger in innehåll som text
// // fs.writeFile ersätter o skriver alltid över de som finns
// // i text.txt så skriver ja nåt i den filen o kör
// // writefile kör den över de..

// fs.readFile("text.txt", "utf8", (err, content) => {
//   if (err) {
//     console.log(err);
//   } else {
//     setTimeout(() => {
//       console.log("content:", content);
//       console.log("nu är content laddat");
//     }, 3000);
//     // console.log("content:", content);
//   }
// });

// //läser filen o skriver ut innehållet

//med a lägger till som +=
// const text =
//   "Why, sometimes I've believed as many as six impossible things before breakfast.\n";
// fs.writeFile("alicequotes.txt", text, { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("saved the text in: alicequotes.txt");
//   }
// });

//default, med w, skriver över varje gång så kan eentlige ta väck de
// const text =
//   "Why, sometimes I've believed as many as six impossible things before breakfast.\n";
// fs.writeFile(
//   "alicequotes.txt",
//   text,
//   { encoding: "utf8", flag: "a" },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("saved the text in: alicequotes.txt");
//     }
//   }
// );

// fs.readFile(
//   "alicequotes.txt",
//   "utf8",

//   (err, content) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("here is my text from alicequotes.txt:", content);

//       const newText = content;
//       fs.writeFile("newText.txt", newText, (err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("new text ok");
//         }
//       });
//     }
//   }
// );

const css = `#one{
    background-color: red;
}
    #two {
    background-color:blue;
    }
    #three {
    background-color:green;
    }
    
`;

fs.writeFile("styles.css", css, { encoding: "utf8" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("lagt till writefile");
  }

  fs.readFile("styles.css", "utf8", (err, content) => {
    if (err) {
      console.log(err);
    } else {
      console.log("läst writefilens innehåll:", content);
      fs.writeFile("howManyIds", content, "utf8", (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("skriver över tilll ny fil");
          fs.readFile("howManyIds", "utf8", (err, content) => {
            if (err) {
              console.log(err);
            } else {
              //   console.log(content);
              //Kollar om de matchar o hittar nåt ID i hela strängen
              // därför g..annars hittar den bara de första
              const amountId = content.match(/#/g);
              // Sen om de inte finns ID sätter ja de ttill 0
              // annars om de inte funnit hade de blivitt null
              // o kan inte ta.length på null
              const showId = amountId ? amountId.length : 0;
              console.log("hej", showId);
            }
          });
        }
      });
    }
  });
});
