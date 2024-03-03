import pizzaLogo from "@/assets/img/pizza-logo.svg";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="header__logo" onClick={() => navigate("/")}>
      <img width="38" src={pizzaLogo} alt="Pizza logo" />
      <div>
        <h1>Pizza Place</h1>
        <p>Best pizza in USA</p>
      </div>
    </div>
  );
};
