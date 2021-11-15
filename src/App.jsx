import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
          <Login />
        </Route>
        <Route path="/login"> {user ? <NavLink to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <NavLink to="/" /> : <Register />}
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
