import { Link, NavLink } from "react-router-dom"

const HeaderView = () => {
  return (
    <header className="d-flex align-items-center justify-content-between p-3">
        <Link className="d-flex gap-3 align-items-center" to={"/home"}>
            <img height={40} src="/c-logo.png" alt="logo" />
            <h4 className="text-light">Coinmania</h4>
        </Link>

        <nav className="d-flex gap-4">
            <NavLink to={"/"}>Giriş Yap</NavLink>
            <NavLink to={"/home"}>Anasayfa</NavLink>
        </nav>
    </header>
  )
}

export default HeaderView