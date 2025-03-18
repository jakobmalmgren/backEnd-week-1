import moment from "moment";

const date = () => {
  const date = new Date();
  const formattedData = moment(date).format("DD/MM/YYYY");
  console.log(formattedData);
  return formattedData;
};

export default date;
