import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import Favorite from "./pages/favorite/Favorite";
import Detail from "./pages/detail/Detail";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/notfound/NotFound";
import BuyerResponse from "./components/buyerForm/BuyerResponse"

import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";
import FavoriteContextProvider from "./context/FavoriteContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
        <CartContextProvider>
        <FavoriteContextProvider>
          <Sidebar />
          {/* <nav>
            <NavLink to={'/'} activeClassName='select-link'>Ir a home</NavLink>
            <NavLink to={'/categoria'} activeClassName='select-link'>Ir a categoria</NavLink>
          </nav> */}
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/category" exact component={Category}></Route>
            <Route
              path="/category/:categoryID"
              exact
              component={Category}
            ></Route>
            <Route path="/favorite" exact component={Favorite}></Route>
            <Route path="/item/:itemID" exact component={Detail}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/buyer" exact component={BuyerResponse}></Route>
            <Route path="*" component={NotFound}></Route>
          </Switch>
        </FavoriteContextProvider>
        </CartContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
