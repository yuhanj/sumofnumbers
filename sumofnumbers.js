let arr = [1, 3, 5, 7, 9];


function sumFor(list) {
  let sum = 0;
  for (let num of list) {
    sum += num;
  }
  return sum;
}

function sumWhile(list) {
  let i = 0;
  let sum = 0;
  while (i < list.length){
    sum += list[i];
    i++
  }
return sum;
}

let arr2 = [...arr];

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list.pop() + sumRecursion(list);
}

function sumTheSimpleWay(list) {
  return _.reduce(list, (memo, num) => memo + num, 0);
}



console.log(sumFor(arr));

console.log(sumWhile(arr));

console.log(sumRecursion(arr2));

console.log(sumTheSimpleWay(arr));




