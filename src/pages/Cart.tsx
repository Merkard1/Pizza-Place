import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearItems } from "@/redux/Cart/cartSlice";
import { PizzaCart } from "@/components";
import { useEffect } from "react";

export const Cart = () => {
  const price = useSelector((state: any) => state.cartReducer.totalPrice);
  const { items } = useSelector((state: any) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearCart = () => {
    dispatch(clearItems());
  };

  console.log(!price);

  useEffect(() => {
    if (!price) {
      return navigate("/cart-empty");
    }
  }, [price]);

  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">Cart</h2>
            <div className="cart__clear" onClick={() => clearCart()}>
              <span>Clear all</span>
            </div>
          </div>
          <div className="content__items">
            {items.map((pizza: any) => (
              <PizzaCart
                pizza={pizza}
                key={pizza.id + pizza.type + pizza.size}
              />
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Amount: <b>123</b>
              </span>
              <span>
                Price: <b>{price} $</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <Link
                to="/"
                className="button button--outline button--add go-back-btn"
              >
                <span>Go back</span>
              </Link>
              <div
                className="button pay-btn"
                onClick={() => alert("not working;(")}
              >
                <span>Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
