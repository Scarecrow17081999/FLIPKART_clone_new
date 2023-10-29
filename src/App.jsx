import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import LoginSignup from "./pages/LoginSignup";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <div className="h-full  bg-slate-200 overflow-x-hidden">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/auth" element={<LoginSignup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
