// vamos importar o request que ele e o superteste
import request from "supertest"

// Agora eu vou conseguir executar algumas funcionalidades baseadas em requisições HTTP

import app from "../src/app"

describe("Tests app.ts", () => {
    test("Catch-All route", async() => {
        // Agora vamos testas algumas coisas que so consigo testar por conta do supertest
        const res = await request(app).get("/")
        expect(res.body).toEqual({message: "Allo programador"})
    })
})



