export default function Auth() {
    return (
        <form className="form" action="http://localhost:5000/users/auth" method="post">
            <input type="text"  name="username" placeholder="input your username"/>
            <input type="password" name="password" placeholder="input you password"/>
            <button>Login</button>
        </form>
    )
}