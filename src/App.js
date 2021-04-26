
import './App.css';
// Import React Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import TeamInfo from './components/TeamInfo/TeamInfo';




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/team/:idTeam">
          <TeamInfo />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
