import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import FarmFresh from "./components/Farmfresh";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/CustomNav";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import MapContainer from "./components/MapContainer";

class App extends Component {
  render () {
    return (
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route  path="/about" component={ About } />
              <Route  path="/farmfresh" component={ FarmFresh } />
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
