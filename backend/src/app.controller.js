import Router from "koa-router"
import UsersController, { PermissionsGuard } from "./users.controller.js"
import PostsController from "./posts.controller.js"

const controller = new Router()

controller.use("/users", UsersController.routes(), UsersController.allowedMethods())
controller.use("/posts", PostsController.routes(), PostsController.allowedMethods())

export default controller