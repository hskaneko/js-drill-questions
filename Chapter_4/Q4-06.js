const waitingUsers = [ '田中', '佐藤', '山本' ]

waitingUsers./* ① */('加藤')
console.log(waitingUsers./* ② */()) // 出力例 : 田中
console.log(waitingUsers./* ② */()) // 出力例 : 佐藤
waitingUsers./* ① */('高山')

waitingUsers.forEach(user => console.log(user))
// 出力例
// 山本
// 加藤
// 高山
