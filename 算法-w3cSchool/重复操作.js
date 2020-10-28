function repeat(str, num) {
  // repeat after me
  let res = ''
  if (num < 0) {
    return ""
  } else {
    for (let i = 0; i < num; i++) {
      res += str
    }
  }
  return res+str;
}

console.log(repeat("*", 3));