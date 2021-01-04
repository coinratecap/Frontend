import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Exchanges from './pages/Exhanges'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/exchanges">
          <Exchanges />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
