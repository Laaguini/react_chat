export default function Reg() {
    return (
        <form className="form" action="http://localhost:5000/users/register" method="post">
            <input type="text"  name="username" placeholder="input your username"/>
            <input type="password" name="password" placeholder="input your password"/>
            <button>Register</button>
        </form>
    )
}
