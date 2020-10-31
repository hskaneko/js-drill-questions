const studentsAkaGumi = ["Tanaka", "Yamamoto", "Suzuki"]
const studentsShiroGumi = ["Kouda", "Hashimoto", "Shimizu"]
const allStudents = [/* ① */studentsAkaGumi, /* ① */studentsShiroGumi]

allStudents./* ② */()
allStudents.forEach(student => console.log(student))

// 出力例
// Hashimoto
// Kouda
// Shimizu
// Suzuki
// Tanaka
// Yamamoto
