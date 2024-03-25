const reverseStr = (str) => {
  let result = "";
  for (const letter of str) {
    result = letter + result
  }

  return result
}


module.exports = reverseStr;