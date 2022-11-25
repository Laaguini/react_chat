import Router from "koa-router"
import { Room, User, UserRoom } from "./database.js"
const controller = new Router()

controller.post("/create", async ctx => {
    const { username, name, initialMembersName } = ctx.request.body 
    const initialMembers = await User.findAll({ where: { username: [ ...(initialMembersName ?? []), username ] } })
    const res = await Room.create({
        name, 
        owner: username
    })

    res.addUser(initialMembers)

    return ctx.body = JSON.stringify(res.dataValues)
})

controller.post("/:id/add", async ctx => {
    const { id } = ctx.params
    const { username } = ctx.request.body

    const user = await User.findOne({ where: { username } })
    const res = await Room.findOne({ where: { id }})

    await res.addUser(user)

    return ctx.body = JSON.stringify(res.dataValues)
})

controller.get("/:id", async ctx => {
    const { id } = ctx.params

    const res = await Room.findOne({ where: { id }, include: User})

    return ctx.body = JSON.stringify(res.dataValues)
})

export default controller