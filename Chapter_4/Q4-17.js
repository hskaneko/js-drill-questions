function createNewAccount(name, mail, year, month, date) {
  const yyyy = `${year}`
  const mm = `${month}`./* ① */(2, "0")
  const dd = `${date}`./* ① */(2, "0")
  return {
    /* ② */,
    /* ③ */,
    registDate: `${yyyy}/${mm}/${dd}`
  }
}

const createdAccount = createNewAccount("Tom", "TomScript@foo-bar-drill.com", 2020, 5, 15)
console.log(createdAccount.name)       // 出力例 : Tom
console.log(createdAccount.mail)       // 出力例 : TomScript@foo-bar-drill.com
console.log(createdAccount.registDate) // 出力例 : 2020/05/15</pre></div>
