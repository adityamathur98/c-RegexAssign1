// let myArr = [15, true, "going", "a", 45.56];
// let newArr = [...myArr];
// console.log(myArr);

// function getProductOfIntegers(a, b, c) {
//   return a * b * c;
// }

// let intArr = [1, 2, 3];
// let productOfArrInt = getProductOfIntegers(...intArr);
// console.log(productOfArrInt);

// let numberArr = [2, 3, 4];
// let myArr = ["Kamal", 45.5, "a"];

// numberArr = [2, ...myArr, 3, 4];
// console.log(numberArr);

// let model = {
//   model: "Amaze",
// };

// let engine = {
//   engineCapacity: 4000,
// };

// let carDetails = {
//   ...model,
//   ...engine,
// };

// let { model: carModel, engineCapacity } = carDetails;
// console.log(`${carModel} is powerd with ${engineCapacity}cc engine.`);

// function logFamily(father, mother, ...rest) {
//   console.log(`${father} ${mother}`);
//   console.log(rest.join(", "));
// }

// let familyArr = ["Piyush", "Monika", "Piyan", "Aditya"];
// logFamily(...familyArr);

// function getMessage(name, otp) {
//   return `Hi! ${customerName}, ${otp} is your OTP`;
// }

// let customerName = "Mona";
// let otp = 89898;

// let optMessage = getMessage(customerName, otp);
// console.log(optMessage);

// function getSum(a, b, ...rest) {
//   return rest.reduce((acc, curr) => acc + curr, 0);
// }

// let myArr = [1, 2, 3, 4, 5];

// let sumOfArr = getSum(...myArr);
// console.log(sumOfArr);

// let userDetails = {
//   username: "Aditya",
//   email: "eraditya@gmail.com",
// };

// let { username } = userDetails;

// console.log(username);

// let racer1 = 98.8;
// let racer2 = 92.39;

// let winner = racer1 > racer2 ? "Racer 1" : "Racer 2";
// console.log(winner);

// function getResult(operator, n1, n2) {
//   switch (operator) {
//     case "+":
//       return n1 + n2;
//     case "-":
//       return n1 - n2;
//     case "*":
//       return n1 * n2;
//     case "/":
//       return n1 / n2;
//     case "%":
//       return n1 % n2;
//     default:
//       return "Invalid Operator";
//   }
// }

// let arithmeticOp = ",";
// let n1 = 4,
//   n2 = 5;
// let calculate = getResult(arithmeticOp, n1, n2);
// console.log(calculate);

// let getAreaOfSquare = (side) => side * side;

// let side = 4;
// let area = getAreaOfSquare(side);
// console.log(area);

// function calculateFare(rupees, discount) {
//   return rupees - rupees * (discount / 100);
// }

// let fare = 200;
// let discountPercentage = 10;

// let discountedFare = calculateFare(fare, discountPercentage);
// console.log(discountedFare);

// function getObj(name, role) {
//   return {
//     name,
//     role,
//   };
// }

// let name = "John",
//   role = "Project Manager";

// let createObj = getObj(name, role);

// console.log(createObj);

let quote = () => "Make it work, make it right, make it fast.";

console.log(quote());
