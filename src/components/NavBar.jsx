import { NavLink } from "react-router";
export default function NavBar() {
  const isLogged = false;
  const fakeUser = "Ahmed";
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
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
              <p>hi {fakeUser}</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
