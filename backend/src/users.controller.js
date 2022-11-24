import "dotenv/config"
import Router from "koa-router"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const controller = new Router()

const PermissionsGuard = (permissions) => (ctx, next) => {
    const token = ctx.cookies.get("authToken")

    if(!token) return ctx.body = "Not allowed"
    const payload = jwt.verify(token, process.env.SECRET)
   
    if(!permissions.every(p => payload.permissions?.includes(p))) return ctx.body = "Not allowed"
    return next()
}

controller.get("/:username", async ctx => {
    const client = await ctx.client()
    const { username } = ctx.params
    const user = await client.collection("users").findOne({ username })

    const token = ctx.cookies.get("authToken")
    if(!token) return ctx.body = JSON.stringify({...user, private: {}})
    const payload = jwt.verify(token, process.env.SECRET)
    
    if(payload?.username != username) return ctx.body = JSON.stringify({...user, private: {}})
    return ctx.body = JSON.stringify({...user })
})

controller.post("/register", async ctx => {
    const client = await ctx.client()
    const { username, password } = ctx.request.body;
    const user = await client.collection("users").findOne({ username })

    if(user) return ctx.body = "User already exists"

    const passwordHash = await bcrypt.hash(password, 8)
    client.collection("users").insertOne({...ctx.request.body, password: passwordHash})

    return ctx.body = '{"status": "OK"}'
})

controller.post("/auth", async ctx => {
    const client = await ctx.client()
    const { username, password } = ctx.request.body;
    const user = await client.collection("users").findOne({ username })

    if(!user) return ctx.body = "User not found"

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid) return ctx.body = "Wrong password"

    const token = jwt.sign(user, process.env.SECRET, {algorithm: "HS256", expiresIn: "6h"})
    ctx.cookies.set("authToken", token)

    return ctx.body = '{"status": "OK"}'
})

export default controller
export { PermissionsGuard }