/* Vamos começar a codar pelo app.ts ou seja aqui
vamos importar algumas coisas que vamos utilizar nesse arquivo
*/
import express, {Application, Request, Response, NextFunction} from "express"
import {router as userRoutes} from "./routes/user.routes"

const app: Application = express()
app.use("/users", userRoutes)

// criando uma rota padrão
app.use("/", (req: Request, res: Response, next: NextFunction): void => {
    res.json({message: "Allo programador"})
})

export default app
