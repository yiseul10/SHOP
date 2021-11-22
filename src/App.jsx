import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

import Notice from "./components/Header/Notice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Router from "./router";

const App = () => {
  return (
    <div className="App">
      <Notice />
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
