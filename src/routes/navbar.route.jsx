import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { useContext } from "react";
import { signOutUser } from "../utils/firebase.utils";
import logo from "../assets/crown.svg";

import "./navbar.styles.scss";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            <div>Shop</div>
          </Link>
          {currentUser ? (
            <Link className="nav-link" onClick={signOutUser}>
              <div>Sign Out</div>
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              <div>Sign In</div>
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
