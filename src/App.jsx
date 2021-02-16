import './App.css';
import { BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Categoria from './pages/categoria/Categoria';
import Favoritos from './pages/favoritos/Favoritos';
import Detalle from './pages/detalle/Detalle';
import NotFound from './pages/notfound/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar/>
        {/* <nav>
          <NavLink to={'/'} activeClassName='select-link'>Ir a home</NavLink>
          <NavLink to={'/categoria'} activeClassName='select-link'>Ir a categoria</NavLink>
        </nav> */}
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/categoria' exact component={Home}></Route>
          <Route path='/categoria/:categoriaID' exact component={Categoria}></Route>
          <Route path='/favoritos' exact component={Favoritos}></Route>
          <Route path='/item/:itemID' exact component={Detalle}></Route>
          <Route path='*' component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
