import "dotenv/config"
import Koa from "koa"
import bodyParser from "koa-bodyparser"
import AppController from "./app.controller.js"
import cors from "@koa/cors"
import multer from "@koa/multer"
import { sequelize } from "./database.js"

sequelize.sync({
})
.then(() => console.log("Database synchronized successfully!"))
.catch(e => console.error(e))

const app = new Koa()

app
.use(cors({
    origin: '*',
    allowMethods: '*',
    allowHeaders: '*'
}))
.use(bodyParser())
.use(AppController.routes())
.use(AppController.allowedMethods())

app.listen(process.env.PORT || 5000)
