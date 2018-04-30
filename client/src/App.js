import React, {Component} from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
import Signin from "./components/Signin";
import Callback from "./components/Callback";
// import Auth from './Auth/Auth';

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      logged_in: false,
      user: {}
    }
  }

  componentDidMount() {
    axios.get('/isauth')
      .then(res => {
        if ( res.data.email ) {
          this.setState({
            logged_in: true,
            user: res.data
          });
        }
      });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  logUserIn = (e) => {
    e.preventDefault();

    axios.post('/login', {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      this.setState({
        logged_in: true,
        user: res.data
      });
    });
  }

  registerUser = (e) => {
    e.preventDefault();

    axios.post('/register', {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      this.setState({
        logged_in: true,
        user: res.data
      });
    });
  }

  logoutUser = () => {
    axios.get('/logout')
      .then(res => {
        this.setState({
          logged_in: false,
          user: {}
        });
      });
  }


  render () {

    return (
        <Router>
          <div>
            <Nav />
            <header>
              <h3>Authentication Example</h3>
                {this.state.logged_in ? (
                  <nav>
                    <span>{this.state.user.email}</span>
                    <button onClick={this.logoutUser}>Log Out</button>
                  </nav>
                ) : ''}
            </header>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route  path="/about" component={ About } />
              <Route path="/cafe" component={ Cafe } />
              <Route  path="/farmfresh" component={ FarmFresh } />
              {/* <Route path="/adminview" render={props => (
                this.state.logged_in ? <AdminView email={this.state.user.email} /> : <Redirect to="/signin" />
              )} /> */}
              <Route path="/adminview" component={ AdminView } />
              <Route path="/adminviewcafe" component={ AdminViewCafe } />
              <Route path="/adminviewlogin" component={ AdminViewLoginPage } />
              <Route path="/contact" component={ Contact } />
              <Route path="/signin" component= { Signin } />
              <Route path="/callback" component= { Callback } />
              <Route component={ NoMatch } />
            </Switch>
            <Footer/>
          </div>
        </Router>
    )
  }
}

export default App;
