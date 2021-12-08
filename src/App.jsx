import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';

import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Home from './pages/Home';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import CheckOut from './pages/CheckOut';
import Login from './pages/Login';
import Review from './pages/Review';

import Notice from './components/Header/Notice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import customerService from './pages/customerService.js';
import CustomerCenter from './pages/CustomerCenter';
import EventNotice from './pages/EventNotice';
import QuestionOne from './pages/QuestionOne';
import FAQ from './pages/FAQ';
import ReviewInsert from './pages/ReviewInsert';
import FlashMessage from './components/Message/FlashMessage';
import ExampleContext from './components/ExampleContext';

import Axios from 'axios';

Axios.defaults.baseURL =
  'http://ec2-3-37-117-153.ap-northeast-2.compute.amazonaws.com:8080/shoppingmall/products';

const App = () => {
  const [flashMessage, setFlashMessage] = useState([]);
  const addFlashMessage = msg => {
    setFlashMessage(prev => prev.concat(msg));
  };

  const user = true;

  return (
    <ExampleContext.Provider value={addFlashMessage}>
      <BrowserRouter>
        <Notice />
        <Header />
        <FlashMessage message={flashMessage} />
        <Switch>
          <Route path='/checkout'>
            <CheckOut />
          </Route>
          <Route exact path='/wish'>
            <WishList />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>

          <Route path='/products'>
            {/* <Route path='/:category'> */}
            <ProductList />
          </Route>
          <Route exact path='/:id'>
            <Product />
          </Route>
          <Route path='/products/:category'>
            <ProductList />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/customerService'>
            <CustomerCenter />
          </Route>
          <Route exact path='/customerService/FAQ'>
            <FAQ />
          </Route>
          <Route path='/login'> {user ? <NavLink to='/' /> : <Login />}</Route>
          <Route exact path='/customerService/EventNotice'>
            <EventNotice />
          </Route>
          <Route exact path='/customerService/QuestionOne'>
            <QuestionOne />
          </Route>
          <Route exact path='/review/ReviewInsert'>
            <ReviewInsert />
          </Route>
          <Route path='/review'>{user ? <NavLink to='/' /> : <Review />}</Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </ExampleContext.Provider>
  );
};

export default App;
