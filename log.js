import fs from "fs";
import moment from "moment";

const logger = (message) => {
  const date = new Date();
  const formattedDate = moment(date).format("DD/MM/YYYY HH:mm:ss");
  const logMessage = `[${formattedDate}] - ${message} \n`;
  fs.appendFile("loggbok.txt", logMessage, (err) => {
    if (err) {
      console.log("error:", err);
    } else {
      console.log(`loggat meddelandet till textfilen:${logMessage}`);
    }
  });
};
export { logger };

//appendFile är annorlunda än writefile
//writefile ersätter alltid innehållet som skickar in
//appendfile, plussar på innehållet o låter de gamla va kvar..lite som +=
