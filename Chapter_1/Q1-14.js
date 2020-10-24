const r1 =  300 + 300 + 150 + 200 // ABDEG
const r2 = /* ① */   // ABEG
const r3 =/* ② */   // ACBDEG
const r4 = /* ③ */   // ACBEG
const r5 = /* ④ */   // ACFG
const r6 = 300 + 150 + 500 + 350 // ABCFG
const lowest = Math.min(r1, r2, r3, r4, r5, r6)
console.log(r1, r2, r3, r4, r5, r6)
     // 出力例：950 1300 850 1200 900 1300
console.log(r"Minimum is", lowest)
     // 出力例：Minimum is 850
