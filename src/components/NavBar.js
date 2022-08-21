import { Link, NavLink, useNavigate } from "react-router-dom";
import {useRef} from "react";
import CartWidget from "./CartWidget";
import '../css/titulo.css'

const NavBar = () => {

  const inputRef = useRef("")
  let navigate = useNavigate()

  function handleClick() {
    navigate("/order/" + inputRef.current.value);
    inputRef.current.value = ""
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <NavLink to="/category/smartphones">Celulares</NavLink>
            </li>
            <li>
              <NavLink to="/category/laptops">Laptops</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/">
          <a href="/" className="btn btn-ghost normal-case text-xl titulo">TECNOLOGIAELECTRO</a>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <NavLink to="/category/smartphones">Celulares</NavLink>
          </li>
          <li>
            <NavLink to="/category/laptops">Laptops</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </div>
      <div className="form-control flex flex-row entrada">
          <input
            type="text"
            id="OrderId"
            placeholder="Buscar (TAK5dwerxlNtN2HX3EFY)"
            className="input input-bordered w-96"
            ref={inputRef}
          />

          {/* <Link to={"./order/" + inputRef.current.value}>  */}
          <button onClick={handleClick} className="btn btn-ghost btn-circle ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          {/* </Link> */}
          <CartWidget />
        </div>
      <div className="navbar-end">
      </div>
    </div>
  );
};
export default NavBar;
