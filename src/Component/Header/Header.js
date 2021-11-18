import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import "./Header.css";
import logo from "../../images/logo.png";
const Header = () => {
  const { user, logout } = useAuth();
  const history = useHistory();
  return (
    <header className="header sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light navLinkContainer">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  exact
                  to="/"
                  activeClassName="active2"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/myorders"
                  activeClassName="active2"
                >
                  My Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/allorders"
                  activeClassName="active2"
                >
                  All Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/addtour"
                  activeClassName="active2"
                >
                  Add a New Order
                </NavLink>
              </li>
              {user.email ? (
                <li className="nav-item">
                  <button
                    className="btn text-white btn-danger ms-3"
                    onClick={logout}
                  >
                    {user.displayName} Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    className="btn text-white btn-danger ms-3"
                    onClick={() => history.push("/login")}
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
