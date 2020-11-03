const person = {
    name: "Ada", job: "programmer",
    gender: "Female", age: 28
}

const output = `/* ① */{person.name} is a /* ① */{person.job}. \
/* ① */{person.gender./* ② */ === "female" ? "She" : "He"} \
is /* ① */{person.age} years old.`

console.log(/* ③ */)
// 出力例：Ada is a programmer. She is 28 years old.