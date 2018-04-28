import React, { Component } from 'react'
import { Grid, Row, Thumbnail, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import "./AdminViewLoginPage.css";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import UpdateBtn from "../../components/UpdateBtn";

export default class AdminViewLoginPage extends Component {
  state = {
    users: [],
    id: "",
    photo: "",
    username: "",
    password: ""
  };
  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res => {
        console.log("Response:" + res);
        this.setState({ users: res.data, photo: "", username: "", password: "" })
      })
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  updateForm = id => {
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("editButton").style.display="inline";
    API.getUser(id)
    .then(res => {
      this.setState({
        id: res.data._id,
        photo: res.data.photo,
        username: res.data.username,
        password: res.data.password
      })
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleUpdate = event => {
    event.preventDefault();
    document.getElementById("editButton").style.display="none";
    document.getElementById("submitButton").style.display = "inline";
    API.updateUser(this.state.id, {
      photo: this.state.photo,
      username: this.state.username,
      password: this.state.password
    })
    .then(res => {
        this.setState({
        id: res.data._id,
        photo: res.data.photo,
        username: res.data.username,
        password: res.data.password
      });
      this.loadUsers();
      console.log("Updated Photo: " + res.data.photo);
    })
    .catch(err => console.log(err)); 
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.photo && this.state.password) {
      API.saveUser({
        photo: this.state.photo,
        username: this.state.username,
        password: this.state.password
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Grid>
        <Col md={6}>
        <Button className="select" href="/adminview">
          Farm
        </Button>
        <Button className="select" href="/adminviewcafe">
          Café
        </Button>
        <Button className="select" href="/adminviewlogin">
          Manage users
        </Button>
          <h1 className="heading">Add a User</h1>
          <form>
            <Input 
              type="hidden"
              value={this.state.id}
              onChange={this.handleInputChange}
              name="id"
            />
            <Input
              value={this.state.photo}
              onChange={this.handleInputChange}
              type="url"
              name="photo"
              placeholder="Link to Photo (http://www.google.com)"
            />            
            <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="Username (required)"
            />
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              type="text"
              name="password"
              placeholder="Enter Password"
            />
            <FormBtn
              id="editButton"
              className="btn btn-warning"
              disabled={!(this.state.photo && this.state.username && this.state.password)}
              onClick={this.handleUpdate}
            >
              Update Item
            </FormBtn>
            <FormBtn
              id="submitButton"
              className="btn btn-success"
              disabled={!(this.state.photo && this.state.username && this.state.password)}
              onClick={this.handleFormSubmit}
            >
              Submit Item
            </FormBtn>
          </form>
        </Col>
        <Col md={6}>
          <h1 className="heading">Account Management</h1>
          {this.state.users.length ? (
              <ListGroup>
                {this.state.users.map(user => (
                      <Col className="profileCol text-center" xs={6} md={4} key={user._id}>
                      <div className = "profileBox">
                          <img className="profilePicture" src={user.photo} alt="242x200" />
                          <h5>{user.username}</h5>
                          <UpdateBtn onClick={() => (this.updateForm(user._id))}/>
                          <DeleteBtn onClick={() => this.deleteUser(user._id)} />
                        </div>
                      </Col>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
        <div className="push"></div>
      </Grid>
    )
  }
}
