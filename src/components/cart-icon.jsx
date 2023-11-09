import { useContext } from "react";
import Icon from "../assets/shopping-bag.svg";
import { CartContext } from "../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggle = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggle}>
      <img src={Icon} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
