import "./App.css";
import "./bootstrap.css";

import './contact.css';
import "./style.css";
import './services.css'
import "./spa.css";
import "./booknow.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Spa from "./components/Spa";
import Book from './components/Book'
import Admin from './components/Admin'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/spa" component={Spa} />
        <Route exact path="/booknow" component={Book} />
        <Route exact path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;