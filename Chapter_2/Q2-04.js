const n = 100
for (/* ① */ i = 2/* ② */ i <= n/* ② */ i++) {
  if (!isPrime(i)) continue
  console.log(i)
}

function isPrime(n) {
  if (n <= 3) {
    return n > 1
  } else if (n /* ③ */ 2 === 0 || n /* ③ */ 3 == 0) {
    return /* ④ */
  }
  i = 5
  while (i ** 2 <= n) {
    if (n % i === 0 || n % (/* ⑤ */) === 0) {
      return false
    }
    i += /* ⑥ */
  }
  return true
}

allPrimes(100)
