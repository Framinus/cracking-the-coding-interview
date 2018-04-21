// Check permutation: Given two strings, write a method to decide if one is a permutation of the other.

// this is my brute force solution. Using the native JS sort solution gives it a runtime of O(n log n).



function checkPermutation(strA, strB) {
  if (strA.length !== strB.length)
    return false;
  const first = strA.split('').sort().join('');
  const second = strB.split('').sort().join('');
  if (first === second) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPermutation("slow", "lows"));
console.log(checkPermutation("matters", "smatter"));
console.log(checkPermutation("drink", "eat"));
