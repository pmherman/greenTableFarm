import React, { Component } from 'react'
<<<<<<< HEAD
import { Grid, Thumbnail, Col, Button, ListGroup } from 'react-bootstrap';
=======
>>>>>>> master
import "./AdminView.css";
import AdminViewFarm from "../AdminViewFarm";
import AdminViewCafe from "../AdminViewCafe";
import AdminViewLogin from "../AdminViewLoginPage";
import { Button } from 'react-bootstrap';

export default class AdminView extends Component {

  displayFarm = () => {
    document.getElementById("adminviewfarm").style.display = "inline";
    document.getElementById("adminviewcafe").style.display = "none";
    document.getElementById("adminviewlogin").style.display="none";
  }

  displayCafe = () => {
    document.getElementById("adminviewcafe").style.display = "inline";
    document.getElementById("adminviewfarm").style.display = "none";
    document.getElementById("adminviewlogin").style.display="none";
  }

  displayLogin = () => {
    document.getElementById("adminviewlogin").style.display = "inline";
    document.getElementById("adminviewfarm").style.display = "none";
    document.getElementById("adminviewcafe").style.display="none";
  }
  
  render() {
    return (
      <div>
        <Button onClick={this.displayFarm} className="select" id="adminfarmbutton">
          Farm
        </Button>
        <Button onClick={this.displayCafe} className="select" id="admincafebutton">
          Café
        </Button>
        <Button onClick={this.displayLogin} className="select" id="adminloginbutton">
          Manage users
        </Button>
        <div id="adminviewfarm">
          <AdminViewFarm/>
        </div>
        <div id="adminviewcafe">
          <AdminViewCafe/>
        </div>
        <div id="adminviewlogin">
          <AdminViewLogin/>
        </div>        
      </div>
    )
  }
}
