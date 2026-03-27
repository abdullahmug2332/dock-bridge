import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// layouts
import WebsiteLayout from "./layouts/WebsiteLayout";
import AdminLayout from "./layouts/AdminLayout";

// pages
import Home from "@/pages/Home";
import AuthPage from "./pages/Auth";
import Products from "./pages/Products";
import DetailPage from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CurrentOrders from "./pages/CurrentOrders";
import OrderHistory from "./pages/OrderHistory";

// admin pages
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import AdminProducts from "./pages/AdminProducts";
import AdminProductDetail from "./pages/AdminProductDetail";
import Inventory from "./pages/Inventory";
import Suppliers from "./pages/Suppliers";
import CMSWebsite from "./pages/CMSWebsite";
import Users from "./pages/Users";
import Reviews from "./pages/Reviews";
import Settings from "./pages/Settings";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // optional (remove if you want instant)
    });
  }, [pathname]);
  return (
    <Routes>
      {/* 🌐 WEBSITE ROUTES */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<CurrentOrders />} />
        <Route path="/history" element={<OrderHistory />} />
      </Route>

      {/* 🛠 ADMIN ROUTES */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Orders />} />
        <Route path="order/:id" element={<OrderDetail />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="product/:id" element={<AdminProductDetail />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="cms" element={<CMSWebsite />} />
        <Route path="users" element={<Users />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
