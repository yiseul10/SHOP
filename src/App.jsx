import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Notice from "./components/Notice";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Notice />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/men" element={<ProductList />} />
        <Route path="/coat" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        {user ? <Navigate to="/" /> : <Login />}
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
