// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

function firstItem(arr , cb){
  return cb(arr[0])
}

//   const test1 = firstItem(items, item => `I love my ${item}!`);
  // console.log(test1); 
  // "I love my Pencil!"
/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }


  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/




function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

const itemsLength = getLength(items, item => `I contain ${item} values`);
console.log(itemsLength);

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(items.length - 1);
}

const itemsLast = last(items, item => `The last item in this array is ${item}`)
console.log(itemsLast)

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y)
}

const itemsSumNums = sumNums(1, 2, sum => `The answer is ${sum}`);
console.log(itemsSumNums);

function multiplyNums(x, y, cb) {
  return cb(x + y)
}

const itemsMultipy = multiplyNums(5, 5,multi => `The answer is ${multi}`)
console.log(itemsMultipy);

function contains(item, arr, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  inArray = `${item} is not in the array`;
  arr.forEach(element => {
    if (element == item) {
      itemInArray = `${item} is in the array`;;
    }
  });
  return cb(itemInArray);
}

const itemsContain = contains("yo-yo", items, element => `${element}`)

console.log(itemsContain);



// function 
/* STRETCH PROBLEM */

const item2 = [1,1,2,4,6,1,6];


function removeDuplicates(array, cb) {
  let newItem2 = [];
  array.forEach(element => {
   if(!newItem2.includes(element)) {
     newItem2.push(element);
   }
  });

  return cb(newItem2);

}

const item2Remove = removeDuplicates(item2, (array) => `The new array contains ${array}`);

console.log(item2Remove);



