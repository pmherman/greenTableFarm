import React, {Component} from "react";
import axios from 'axios';
import API from "./utils/API";
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

    this.state= {
        id: '',
        email: '',
        password: ''
    }
}

handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  logUserIn = (e) => {
    e.preventDefault();

    API.loginUser({
      email: this.state.email,
      password: this.state.password
    }).then(res => {
        console.log("logged in!");
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
              <Route path="/adminview" render={props => (
                this.state.logged_in ? <AdminView email={this.state.user.email} /> : (<section id="signIn"> 
                <div className="container"> 
                    <div className="row" id="signinHeader"> 
                        <div className="text-center" lg={12}> 
                            <h2 className="text-center text-secondary mb-0">Please Sign In</h2>
                            <hr className="mb-5" />
                        </div> 
                    </div> 
                    <div className="row"> 
                    <div md={12}> 

                        {/* Contact Form Start */}
                        {/* update email in action https://formspree.io/your@email.com */}
                        <form> 

                            {/* User Name  */}
                            <div className="row  control-group"> 
                                <div className="form-group" sm={12}> 
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder="Email" 
                                    value={this.state.email} 
                                    onChange={this.handleChange} 
                                    name="email" 
                                    id="userEmail" /> 
                                </div> 
                            </div> 

                            {/* User Password */}
                            <div className="row control-group"> 
                                <div className="form-group" sm={12}> 
                                    <input type="text" 
                                    className="form-control" 
                                    placeholder="Password" 
                                    name="password" 
                                    value={this.state.password} 
                                    onChange={this.handleChange} 
                                    id="password" /> 
                                </div> 
                            </div> 

                            {/* Submit Button */}
                            <div className="row"> 
                                <div sm={12}> 
                                    <button onClick={this.logUserIn} id="submitLogin" type="submit" className="btn btn-lg pull-right">Send</button> 
                                </div> 
                            </div> 

                        </form> {/* End Contact Form */}
                    </div> {/* End md={8} offset-md-2 */}
                    </div> {/* End row*/}
                </div> {/* End Container*/}
                <div className="push"></div>
            </section>)
              )} />
              <Route path="/adminview/cafe" component={ AdminViewCafe } />
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
