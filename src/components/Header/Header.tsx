import { IoCart } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";

export const Header = () => {
  const location = useLocation();
  const cart = useSelector((state: any) => state.cartReducer.items);
  const cartPrice = useSelector((state: any) => state.cartReducer.totalPrice);
  let size = 0;
  const cartSize = cart.map((obj: any) => (size += obj.count));

  return (
    <div className="header">
      <div className="container">
        <Logo />
        <div className="header__cart">
          {cartSize && location.pathname === "/cart-empty" ? (
            <></>
          ) : (
            <Link to="/cart" className="button button--cart">
              <span>{cartPrice}$</span>
              <div className="button__delimiter"></div>
              <IoCart />
              <span>{size}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
