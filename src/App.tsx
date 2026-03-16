import Home from "@/components/pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import AuthPage from "./components/pages/Auth";
import { useEffect } from "react";
import { useLocation } from "react-router";
import CurrentOrders from "./components/pages/CurrentOrders";
import OrderHistory from "./components/pages/OrderHistory";
import Products from "./components/pages/Products";
import DetailPage from "./components/pages/ProductDetail";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";

function App() {
  const { pathname } = useLocation();
  const isAuthenticated = true;
  useEffect(() => {
    window.scrollTo(0, 0); // scrolls to top whenever pathname changes
  }, [pathname]);
  return (
    <main className="w-full ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="orders" element={<CurrentOrders />} />
        <Route path="history" element={<OrderHistory />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
