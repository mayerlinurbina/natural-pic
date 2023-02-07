import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="navlink" to="/">Home</NavLink>
      <div className="navline">|</div>
      <NavLink className="navlink" to="/favoritos">Favoritos</NavLink>
     </nav>
  );
}