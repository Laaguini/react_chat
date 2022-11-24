import Router from "koa-router"
import UsersController, { PermissionsGuard } from "./users.controller.js"

const controller = new Router()

controller.use("/users", UsersController.routes(), UsersController.allowedMethods())

export default controller