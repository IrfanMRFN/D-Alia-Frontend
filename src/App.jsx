import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { assets } from "./assets/assets";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HowToOrder from "./pages/HowToOrder";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import MyOrders from "./pages/MyOrders";
import Footer from "./components/Footer";
import LoginPopup from "./components/LoginPopup";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div
      className="font-roboto bg-cover bg-fixed bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${assets.background_nastar})` }}
    >
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <ToastContainer />
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-to" element={<HowToOrder />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
