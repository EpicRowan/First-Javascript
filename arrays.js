"use strict";


const fruits = ["apple", "durian", "cherry"]

// 1. printIndices
function printIndices(items) {
  // Replace this with your code

for (const i in fruits) {
  console.log(fruits[i], i);
}}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const evenFruits = [];
  for (const i in fruits){
    if (i % 2 === 0){
      evenFruits.push(fruits[i]);}}

  console.log(evenFruits);
    

  }




// 3. smallestNItems
function smallestNItems(items, n) {
//   // Replace this with your code
const nums = [1, 30, 4, 21, 100000];

nums.sort((a, b) => b - a);

const n = -n;

console.log(nums.slice(0, n));
}
