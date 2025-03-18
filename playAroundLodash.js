import lodash from "lodash";
console.log(lodash);

const array = [1, 2, 3, 4, 5, 6];
console.log(lodash.shuffle(array));

const user = {
  name: "Jakob",
  age: 37,
  city: "Stockholm",
};

const mappedObj = lodash.map(user, (value, key) => {
  return `value:${value} and key:${key}`;
});
console.log(mappedObj);
