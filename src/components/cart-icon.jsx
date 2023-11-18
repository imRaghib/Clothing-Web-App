import { useContext } from "react";
import Icon from "../assets/shopping-bag.svg";
import { CartContext } from "../contexts/cart.context";
import { ShoppingIcon, ItemCount, CartIconContainer } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { itemCount } = useContext(CartContext);

  const toggle = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon src={Icon} />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
