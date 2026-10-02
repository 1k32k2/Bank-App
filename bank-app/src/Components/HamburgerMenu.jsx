import "./HamburgerMenu.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const HamburgerMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="hamburger-menu" id="mobile-navigation">
      <button
      id="mobile-menu-toggle"
        className={`hamburger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>

      <div id="mobile-menu" className={`menu-overlay ${isOpen ? "open" : ""}`}>
        <ul id="mobile-menu-links" className="menu">
          <li>
            <NavLink
              id="mobile-nav-about"
              to="/"
              className={pathname === "/" ? "active-link" : ""}
              onClick={toggleMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              id="mobile-nav-services"
              to="/services"
              className={pathname === "/services" ? "active-link" : ""}
              onClick={toggleMenu}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              id="mobile-nav-contact"
              to="/client"
              className={pathname === "/client" ? "active-link" : ""}
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </li>
          {user ? (
            <li>
              <NavLink
                id="mobile-nav-dashboard"
                to="/dashboard/user"
                className={pathname === "/dashboard/user" ? "active-link" : ""}
                onClick={toggleMenu}
              >
                Dashboard
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink
                  id="mobile-nav-signup"
                  to="/signup"
                  className={pathname === "/signup" ? "active-link" : ""}
                  onClick={toggleMenu}
                >
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink
                  id="mobile-nav-login"
                  to="/login"
                  className={pathname === "/login" ? "active-link" : ""}
                  onClick={toggleMenu}
                >
                  Log In
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
