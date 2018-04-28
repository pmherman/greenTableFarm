import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import FarmFresh from "./components/Farmfresh";
import AdminView from "./components/AdminView";
import AdminViewCafe from "./components/AdminViewCafe";
import AdminViewLoginPage from "./components/AdminViewLoginPage";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/CustomNav";
import Footer from "./components/Footer";
import Cafe from "./components/Cafe";
import Contact from "./components/Contact";


class App extends Component {
  render () {
    return (
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route  path="/about" component={ About } />
              <Route path="/cafe" component={ Cafe } />
              <Route  path="/farmfresh" component={ FarmFresh } />
              <Route path="/adminview" component={ AdminView } />
              <Route path="/adminviewcafe" component={ AdminViewCafe } />
              <Route path="/adminviewlogin" component={ AdminViewLoginPage } />
              <Route path="/contact" component={ Contact } />
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </div>
        </Router>
    )
  }
}

export default App;
