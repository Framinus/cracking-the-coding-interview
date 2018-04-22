// Problem 1.1

// My solution: split the string, create a hash map, and iterate through the array, creating new keys in the map for each unique letter. if the letter already exists, break the loop and return false. I believe this solution is optimal in terms of time complexity because the worst case is going through the array once.

// I belive the run time for this is O(n), because I iterate through the array once.

// In terms of space complexity, I create both an array and an object.

// Possible further optimization - create a set instead of a hash map.

function uniqueChars(str) {
  const charArray = str.split('');
  const charMap = {};
  for (let i=0; i<charArray.length; i++) {
    if (!charMap[charArray[i]]) {
      charMap[charArray[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(uniqueChars("pizza"));
console.log(uniqueChars("rain"));
console.log(uniqueChars("Mr. Jones"));
