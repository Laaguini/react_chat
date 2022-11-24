import { Link, Outlet } from "react-router-dom"

export default function Layout({children}){
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
            </div>
            {children}
        </div>
    )
}