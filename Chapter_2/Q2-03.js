function calculateResult(op1, op2, operator) {
  let result = 0
  switch (/* ① */) {
    /* ② */ "+":
      result = op1 + op2
      break;
    /* ② */ "-":
      result = op1 - op2
      break;
    /* ② */ "*":
      result = op1 * op2
      break;
    /* ② */ "/":
      result = op1 / op2
      break;
    default:
      /* ③ */ new SyntaxError(
        "演算子は「+, -, *, /」の中から選んでください")
  }
  return result
}

console.log(calculateResult(6,7,"+"))
