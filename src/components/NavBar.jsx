import { NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const isLogged = !!user;
  // const isLogged = false;
  // const fakeUser = "Ahmed";
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10 ">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost text-xl">
            Blog
          </NavLink>
        </div>
        <div className="flex">
          <ul className="flex items-center gap-2">
            {!isLogged ? (
              <>
                <li>
                  <NavLink to="/register" className="btn btn-ghost text-xl">
                    register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/login" className="btn btn-ghost text-xl">
                    login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <p>hi {user.name}</p>
                <button onClick={logout} className="btn btn-ghost text-xl">
                  logout
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
