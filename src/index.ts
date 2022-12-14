import express from "express"
import * as dotenv from "dotenv"

import { routes } from "./routes"
import { exceptionHandler } from "@exceptions/exception-handler"

const app = express()

app.use(express.json())
app.use(routes)
app.use(exceptionHandler)

dotenv.config()

app.listen(process.env.PORT || 3333)