function greetings() {
  const today = new Date()
  const hour = /* ① */.getHours()
  if (hour > 5 /* ② */ hour < 9) return "おはようございます"
  /* ③ */ (hour /* ④ */ 18 && hour >= 9) return "こんにちは"
  /* ⑤ */ return "こんばんは"
}
