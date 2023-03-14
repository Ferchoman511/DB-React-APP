import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const Navbar = () => {
  const history = useHistory();

  const { dispatch } = useContext(AuthContext);
  function handleLogout() {
    dispatch({ type: authTypes.logout });
    history.replace("/login");
  }
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/login">
          DB APP
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="active text-white"
                to="/men"
                className="nav-link"
                aria-current="page"
              >
                Men
              </NavLink>
              {/* <a className="nav-link active" aria-current="page" href="/men">
                Men
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active text-white"
                to="/women"
                className="nav-link"
                aria-current="page"
              >
                Women
              </NavLink>
              {/* <a className="nav-link active" aria-current="page" href="/women"> */}
              {/* Women
              </a> */}
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active text-white"
                to="/search"
                className="nav-link"
                aria-current="page"
              >
                Search
              </NavLink>
              {/* <a className="nav-link active" aria-current="page" href="/search">
                Search
              </a> */}
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
