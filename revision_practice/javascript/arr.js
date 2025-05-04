// let myArr = [3, "India", 4, "Asia", 4];
// let myArr2 = ["a", "b"];
// let val = true;

// function getCheckEl(myArr, val) {
//   return myArr.includes(val);
// }

// let isValInclude = getCheckEl(myArr, val);

// console.log(isValInclude);

// function getIndexOfVal(arr, val) {
//   return myArr.find((el) => {
//     if (typeof el === "string") {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }

// let firstApperanceOfVal = getIndexOfVal(myArr, val);
// console.log(firstApperanceOfVal);

// myArr.unshift(val);
// console.log(myArr);

// let joinedArr = myArr.concat(myArr2);
// console.log(joinedArr);

// let myArr = ["A", 1, 2, 3, 2];
// let value = 2;
// let lastIndexOfValue = myArr.lastIndexOf(value);
// console.log(lastIndexOfValue);

let numArr = [5, 3, false, 8, 1, true];
let startIndex = 1;
let deleteCount = 2;
let val1 = 788.52,
  val2 = null;
// let sep = "+";
// numArr.sort((a, b) => a - b);
// console.log(numArr);

// let joinedArrStr = numArr.join(sep);
// console.log(joinedArrStr);

// let slicedArr = numArr.slice(startIndex, endIndex);
// console.log(slicedArr);

// function getIndexOfString(arr) {
//   return arr.findIndex((el) => (typeof el === "boolean" ? true : false));
// }

// let indexOfString = getIndexOfString(numArr);
// console.log(indexOfString);

numArr.splice(startIndex, deleteCount, val1, val2);
console.log(numArr);
