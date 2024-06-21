function arrSum(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return "The arrays must be the same length";
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!Number.isInteger(arr1[i]) || !Number.isInteger(arr2[i])) {
      return "The arrays must contain only integer numbers";
    }
  }

  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i] + arr2[i];
  }
  return sum;
}

console.log(arrSum([1, 2, 3], [4, 5, 6])); //21
console.log(arrSum([-1, -2, -3], [-4, -5, -6])); //-21
console.log(arrSum([0, 0, 0], [4, 5, 6])); //15
console.log(arrSum([100, 200, 300], [400, 500, 600])); //2100
console.log(arrSum([1, 2, 3], [4, 5])); // "The arrays must be the same length"
console.log(arrSum([1, 2, "miau"], [4, 5, 6])); // "The arrays must contain only integers"