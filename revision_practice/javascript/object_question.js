// let movie = {
//   title: "Baahubali",
//   director: "Rajamouli",
//   "lead actors and thier roles": {
//     prabhas: "Baahubali",
//     anushka: "Devasena",
//     rana: "Bhallaladeva",
//     tamannah: "Avanthika",
//   },
// };

// let person = {
//   name: "Sam",
//   age: 20,
//   greet: function () {
//     console.log("Hello");
//   },
//   marks: {
//     science: 70,
//     math: 75,
//   },
//   "language known": ["telugu", "hindi", "english"],
// };

// let key = "class";
// let value = "forth";

// person[key] = value;
// console.log(person);

// function makePersonObj(id, name, emailId) {
//   return {
//     id,
//     name,
//     emailId,
//   };
// }

// let id = 5;
// let name = "Sushil";
// let emailId = "sushil@gmail.com";

// let personObj = makePersonObj(id, name, emailId);
// console.log(personObj);

// function calculateTotalScore(arr) {
//   let sum = arr.reduce((a, b) => a + b, 0);
//   return sum;
// }

// let arrOfScore = [25, 55, 30];
// let totalRuns = calculateTotalScore(arrOfScore);
// console.log(totalRuns);

// function makeNewArr(n1, n2, n3) {
//   let arr = [];
//   arr.push(n1);
//   arr.push(n2);
//   arr.push(n3);
//   return arr;
// }

// let num1 = 1,
//   num2 = 2,
//   num3 = 3;

// let myArr = makeNewArr(num1, num2, num3);

// console.log(myArr);

// function getEligibility(personObj) {
//   if (personObj.score > 5) {
//     return true;
//   }
//   return false;
// }

// let personObj = {
//   name: "Paro",
//   score: 4.6,
// };

// let isEligibleToPlay = getEligibility(personObj);
// console.log(isEligibleToPlay);

function getPreferredGameMode(arrOfFrds) {
  let numOfMember = arrOfFrds.length;
  if (numOfMember === 0) {
    return "Solo";
  } else if (numOfMember === 1) {
    return "Dual";
  } else {
    return "Squad";
  }
}

let arrOfFrds = [];

let preferredGameMode = getPreferredGameMode(arrOfFrds);

console.log(preferredGameMode);
