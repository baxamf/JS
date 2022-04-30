function expo (arr, exp) {
  const newArr = [];
  arr.forEach(el => {newArr.push(el ** exp)});
  return newArr
} 

const res = expo([1,2,3,4], 2)
console.log(res)