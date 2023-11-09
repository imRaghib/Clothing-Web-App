import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { useContext, useState } from "react";
import { signOutUser } from "../utils/firebase.utils";
import Logo from "../assets/crown.svg";
import CartIcon from "../components/cart-icon";
import CartDropDown from "../components/cart-dropdown";
import { CartContext } from "../contexts/cart.context";

import "./navbar.styles.scss";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={Logo} className="logo" />
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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
