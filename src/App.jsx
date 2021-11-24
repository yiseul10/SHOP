import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import Review from "./pages/Review";

import Notice from "./components/Header/Notice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import customerService from "./pages/customerService.js";
import CustomerCenter from "./pages/CustomerCenter";
import EventNotice from "./pages/EventNotice";
import QuestionOne from "./pages/QuestionOne";
import FAQ from "./pages/FAQ";
import ReviewInsert from "./pages/ReviewInsert";

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
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/products/">
          <ProductList />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/wish">
          <WishList />
        </Route>

        <Route exact path="/review">
          <Review />
        </Route>

        <Route exact path="/customerService">
          <CustomerCenter />
        </Route>
        <Route exact path="/customerService/FAQ">
          <FAQ />
        </Route>
        <Route path="/login"> {user ? <NavLink to="/" /> : <Login />}</Route>
        <Route exact path="/customerService/EventNotice">
          <EventNotice />
        </Route>
        <Route exact path="/customerService/QuestionOne">
          <QuestionOne />
        </Route>
        <Route exact path="/review/ReviewInsert">
          <ReviewInsert />
        </Route>
        <Route path="/review">{user ? <NavLink to="/" /> : <Review />}</Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
