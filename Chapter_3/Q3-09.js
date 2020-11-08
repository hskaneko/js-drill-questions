const strongRegex = new /* ① */('^(?=.*[a-z])(?=.*/* ② */)(?=.*[0-9])\
(?=.*[!@#\$%\^&\*])(?=.{/* ③ */,})')
const mediumRegex = new /* ① */('^(((?=.*[a-z])(?=.*/* ② */)|\
((?=.*[a-z])(?=.*[0-9]))|(?=.*/* ② */)(?=.*[0-9])))(?=.{/* ③ */,})')

function checkPWStrength(password){
  if(strongRegex./* ④ */(password)) return "Strong"
  else if(mediumRegex./* ④ */(password)) return "Medium"
  else return "Weak"
}

console.log(checkPWStrength("aA0@csadad")) // 出力例：Strong
console.log(checkPWStrength("dssag2wg"))   // 出力例：Medium
console.log(checkPWStrength("ASA657"))     // 出力例：Weak
console.log(checkPWStrength("2131212"))    // 出力例：Weak