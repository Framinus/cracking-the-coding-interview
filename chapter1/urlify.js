function uRLify(str) {
  const arr = str.split(' ');
  const result = [];
  for (i=0; i<arr.length; i++) {
    if (i < arr.length - 1) {
      let wordAndSpace = arr[i].concat("%20");
      result.push(wordAndSpace);
    } else {
      result.push(arr[i]);
    }
  }
  return result.join('');
}

console.log(uRLify("The quick brown fox"));
console.log(uRLify("Baked beans"));
console.log(uRLify("bananas"));
