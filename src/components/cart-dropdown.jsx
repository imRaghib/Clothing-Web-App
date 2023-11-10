import "./cart-dropdown.styles.scss";
import { Button } from "./button";
import CartItem from "./cart-item";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigator = useNavigate();

  const handleOnClick = () => {
    navigator("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <Button onClick={handleOnClick}>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
