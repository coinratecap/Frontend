import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Exchanges from './pages/Exhanges'
import Blog from './pages/Blog'

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
        <Route path="/blog">
          <Blog />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
