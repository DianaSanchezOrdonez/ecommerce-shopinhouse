import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <>
      <Router>
        <Sidebar/>
      </Router>
    </>
  );
}

export default App;
