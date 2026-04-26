//MIT ALGORITHM TASK 2

function countDigits(str) {
  return Array.from(str).filter((ch) => ch >= "0" && ch <= "9").length;
}
console.log(countDigits("545hjhljlkjlkhgf45454h45"));
