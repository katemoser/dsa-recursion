"use strict";

/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base case
  if(nums.length === 0) return 1;
  return nums[0] * product(nums.splice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  //base case
  if(words.length === 0) return 0;
  return Math.max(words[0].length, longest(words.splice(1)))
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  //base case
  if(str.length === 0) return "";
  return str[0] + everyOther(str.slice(2));

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  //base case
  if(str.length <= 1) return true;

  let firstChar = str[0];
  let lastChar = str[str.length-1];
  if(firstChar != lastChar) return false;
  return isPalindrome(str.slice(1,-1));

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  //base case: empty array, not found, return -1
  if(arr.length === 0) return -1;
  //base case: found it @ first index!
  if(arr[0] === val) return 0;
  //otherwise: check rest of array, keeping track of indices we've checked
  let foundIndex = findIndex(arr.slice(1), val);
  return foundIndex === -1 ?  -1: foundIndex +1;
}

/** revString: return a copy of a string, but in reverse. */
//TODO: try doing the work going down instead
function revString(str) {
  if(str.length === 0) return "";

  return str[str.length -1] + revString(str.slice(0,-1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for(let item in obj){
    if(typeof obj[item] === "object"){
      strings = strings.concat(gatherStrings(obj[item]));
    }
    else if(typeof obj[item] === "string"){
      strings.push(obj[item]);
    }
  }
  return strings;

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
//try and use error raising
//throw an exception (with exception handling)
function binarySearch(arr, val) {
  //base case
  if(arr.length === 0) return -1;
  let midpoint = Math.floor(arr.length/2)
  console.log(midpoint);
  //base case: val is at the midpoint
  if(arr[midpoint] === val){
    return midpoint;
  }

  //otherwise, we're going to split the array.
  if (arr[midpoint] > val){
    //do binary search on left array
    return binarySearch(arr.splice(0, midpoint), val)
  }
  else{
    //do binary search on right array
    let index = binarySearch(arr.splice(midpoint, arr.length -1), val)
    return index != -1 ? midpoint + index : -1;
  }

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
