const /* ① */ = require("supertest")
const server = require('./server')

describe("GET /fruits ", () => {
  it("Should respond with an array of fruits", async () => {
    const response = await request(server)./* ② */("/fruits")
    expect(response.body).toEqual(
        ['林檎', 'オレンジ', 'バナナ', 'メロン', '葡萄'])
    expect(response.statusCode)./* ③ */(200)
  })
})