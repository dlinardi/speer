import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.scss';

// Component imports
import Landing from './components/Landing/Landing';
import Pricing from './components/Pricing/Pricing';
import Payment from './components/Payment/Payment';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
