import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Router>
            <Switch>
              <Route exact path='/' component={Form} />
              <Route path="/App" component={Form} />
            </Switch>
          </Router>
        </div>
      </div>

    </div>
  );
}

export default App;
