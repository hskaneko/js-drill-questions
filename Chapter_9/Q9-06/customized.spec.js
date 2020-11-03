const sum = require('./customized').sum

describe("sum()", () => {
    /* ① */("should return number", () => {
        /* ② */(sum(1, 2))./* ③ */(3)
    })
    /* ① */("should throw Exception", () => {
        /* ② */(() => { sum(1, '2'); })./* ④ */(TypeError)
        /* ② */(() => { sum('1', 2); })./* ④ */(TypeError)
    })
})