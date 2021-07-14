import Cart from "../../atoms/Cart/Cart";
import CartItemPlaceholder from "../../atoms/CartItemPlaceholder/CartItemPlaceholder";
import { useCart } from "../../../context/CartContext";
const CartContainer = () => {
  const { openPopup } = useCart();
  return (
    <div className="cart-container" tabIndex="0" onClick={openPopup}>
      <Cart />
      <CartItemPlaceholder />
    </div>
  );
};

export default CartContainer;
