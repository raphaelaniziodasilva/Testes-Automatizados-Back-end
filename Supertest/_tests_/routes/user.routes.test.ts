import request from "supertest"

import app from "../../src/app"

describe("User routes", () => {
    test("Get All users", async  () => {
        const res = await request(app).get("/users")
        expect(res.body).toEqual(["Jõao", "Miguel", "Pedro"])

    })
})