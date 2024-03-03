import { Content, Cart, CartEmpty, NotFound } from "@/pages";
import { Header } from "@/components";
import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart-empty" element={<CartEmpty />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
