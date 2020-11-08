function sum(a, b) {
  return a + b
}
const sum = /* ① */ => a + b


function fibo(n) {
  if (n < 2) {
    return n
  }
  return fibo(n - 1) + fibo(n - 2)
}
const fibo = (n) => n < 2 /* ② */ n /* ③ */ fibo(n - 1) + fibo(n - 2)


function betweenOrBound(low, high, n) {
  return n < low ? low : (n > high ? high : n)
}
const betweenOrBound = (low, high, n) => {
  if (n /* ④ */ low && n /* ⑤ */ high)
    return n
  else if (n /* ⑥ */ low)
    return low
  else
    return high
}
