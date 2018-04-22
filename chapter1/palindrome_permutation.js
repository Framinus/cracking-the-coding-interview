function isPalindromePermutation(str) {
  const charArray = str.replace(/\s/g, '').split('');
  const charMap = {};
  for (i=0; i<charArray.length; i++) {
    if (!charMap[charArray[i]]) {
      charMap[charArray[i]] = 1;
    } else {
      charMap[charArray[i]] ++;
    }
  }
  // iterating through the map to see how many characters have even counts.
  let evenCount = 0;
  for (let char in charMap) {
    if (charMap[char] % 2 === 0) {
      evenCount ++;
    }
  }
  // if the string is even...
  if (charArray.length % 2 === 0) {
    // if the number of characters in the map equals the number of even characters, we know it's true.
    if (Object.keys(charMap).length === evenCount) {
      return true;
    } else {
      return false;
    }
    // if the number of characters in the string is odd, there can be only one odd count in the map in order for the palindrome condition to be true.
  } else {
    if ((Object.keys(charMap).length - evenCount) === 1) {
      return true;
    }
    return false;
  }

}

console.log(isPalindromePermutation("taco cat")); // should return true
console.log(isPalindromePermutation("racecar")); // should return true
console.log(isPalindromePermutation("random stuff")); // should return false
