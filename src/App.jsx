import './App.css';
import { BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import Favorite from './pages/favorite/Favorite';
import Detail from './pages/detail/Detail';
import Cart from './pages/cart/Cart';
import NotFound from './pages/notfound/NotFound'

import CartContextProvider from './context/CartContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Sidebar/>
          {/* <nav>
            <NavLink to={'/'} activeClassName='select-link'>Ir a home</NavLink>
            <NavLink to={'/categoria'} activeClassName='select-link'>Ir a categoria</NavLink>
          </nav> */}
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/category' exact component={Home}></Route>
            <Route path='/category/:categoryID' exact component={Category}></Route>
            <Route path='/favorite' exact component={Favorite}></Route>
            <Route path='/item/:itemID' exact component={Detail}></Route>
            <Route path='/cart' exact component={Cart}></Route>
            <Route path='*' component={NotFound}></Route>
          </Switch>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
