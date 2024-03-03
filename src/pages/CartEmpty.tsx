import { useNavigate } from "react-router-dom";

import cartEmptyImg from "../assets/img/empty-cart.png";

export const CartEmpty: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="cart cart--empty">
      <h2>
        Cart is Empty <span>😕</span>
      </h2>
      <p>
        U haven't choose your pizza yet
        <br />
        For ordering return to main page
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <div onClick={() => navigate("/")} className="button button--black">
        <span>Go back</span>
      </div>
    </div>
  );
};
