import { Link, Outlet } from "react-router-dom"

export default function Layout(){
    return (
        <>
                <nav className="navBar">
                    <ul className="navList">
                        <Link className="btn" to="/">Home</Link>
                        <Link className="btn" to="/catalog">Catalog</Link>
                        <Link className="btn" to="/auth">Auth</Link>
                        <Link className="btn" to="/reg">Reg</Link>
                    </ul>
                </nav>
            <div className="container">
                <Outlet />
               </div>
        </>
    )
}