// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

function longestConsec(strarr, k) {
  let string = '';
  let check;
  if(k <= 0) return string;
  for(let i = 0; i < strarr.length - k + 1; i++) {
    check = strarr.slice(i, i + k).join('');
    if(string.length < check.length)
      string = check;
  }
  return string;
}