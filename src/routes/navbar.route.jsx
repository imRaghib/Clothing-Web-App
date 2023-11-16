import { Outlet } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { useContext } from "react";
import { signOutUser } from "../utils/firebase.utils";
import Logo from "../assets/crown.svg";
import CartIcon from "../components/cart-icon";
import CartDropDown from "../components/cart-dropdown";
import { CartContext } from "../contexts/cart.context";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navbar.styles";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={Logo} className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
