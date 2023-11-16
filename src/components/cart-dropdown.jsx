import { Button } from "./button";
import CartItem from "./cart-item";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigator = useNavigate();

  const handleOnClick = () => {
    navigator("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleOnClick}>Checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
