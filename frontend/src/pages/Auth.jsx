import handleClick from "../handler/handler"

export default function Auth() {
    return (
        <form className="form" action="http://localhost:5000/users/auth" method="post">
            <input className="user" type="text"  name="username" placeholder="input your username"/>
            <input className="pass" type="password" name="password" placeholder="input you password"/>
            <button type="submit" onClick={handleClick}>Login</button>
        </form>
    )
}