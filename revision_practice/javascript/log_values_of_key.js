// let myObj = [
//   {
//     name: "Printing Press",
//     "invented by": "Johannes Gutenberg",
//     year: 1440,
//   },
//   {
//     name: "Light Bulb",
//     "invented by": "Thomas Edison",
//     year: 1879,
//   },
//   {
//     name: "Telephone",
//     "invented by": "Alexander Graham Bell",
//     year: 1876,
//   },
//   {
//     name: "Aeroplane",
//     "invented by": "Orville and Wilbur Wright",
//     year: 1903,
//   },
//   {
//     name: "Computer",
//     "invented by": "Charles Babbage",
//     year: 1822,
//   },
// ];

// for (let key of myObj) {
//   console.log(key);
// }

// let arrOfPerson = [
//   {
//     name: "Ashish",
//     age: 24,
//   },
//   {
//     name: "Prakash",
//     age: 45,
//   },
//   {
//     name: "Rakesh",
//     age: 15,
//   },
// ];

// for (let el of arrOfPerson) {
//   if (el.age >= 18) {
//     console.log(el.name);
//   }
// }

function getIndiaCarsArr(arrOfCarBrands) {
  let indiaCar = [];

  for (let el of arrOfCarBrands) {
    if (el.country === "India") {
      indiaCar.push(el.name);
    }
  }
  return indiaCar;
}

let arrOfCarBrands = [
  {
    name: "Tata",
    country: "India",
  },
  {
    name: "Chevrolet",
    country: "America",
  },
  {
    name: "Audi",
    country: "Germany",
  },
  {
    name: "Honda",
    country: "Japan",
  },
];

let arrOfIndiaCar = getIndiaCarsArr(arrOfCarBrands);
console.log(arrOfIndiaCar);
