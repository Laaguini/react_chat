import Router from "koa-router"
import UsersController, { PermissionsGuard } from "./users.controller.js"
import RoomController from "./room.controller.js"

const controller = new Router()

controller.use("/users", UsersController.routes(), UsersController.allowedMethods())
controller.use("/room", RoomController.routes(), RoomController.allowedMethods())

export default controller