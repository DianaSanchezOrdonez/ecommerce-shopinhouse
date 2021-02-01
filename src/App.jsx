import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Favoritos from './pages/favoritos/Favoritos';
import Resumen from './pages/resumen/Resumen';

const App = () => {
  return (
    <>
      <Router>
        <Sidebar/>
        <Switch>
          <Route path='/inicio' exact component={Home}></Route>
          <Route path='/favoritos' exact component={Favoritos}></Route>
          <Route path='/resumen' exact component={Resumen}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
