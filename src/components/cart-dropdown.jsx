import "./cart-dropdown.styles.scss";
import { Button } from "./button";
import CartItem from "./cart-item";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropDown;