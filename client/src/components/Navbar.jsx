import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <div className="nav-container">
          <div className="logo-brand">
            <NavLink to="/"><span>Career</span>Guru🎓</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/" className="hover-animation"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover-animation"> About </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="hover-animation"> Blogs </NavLink>
              </li>
              <li>
                <NavLink to="/service" className="hover-animation"> Roadmaps </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover-animation"> Contact </NavLink>
              </li>

              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout" className=" common-btn"> Logout </NavLink>
                </li>
              ) : (
                <>
                    <div className="nav-btn-grp">
                      <li>
                        <NavLink to="/register" className=" common-btn"> Register </NavLink>
                      </li>
                      <li>
                        <NavLink to="/login" className=" common-btn"> Login </NavLink>
                      </li>
                  </div>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
