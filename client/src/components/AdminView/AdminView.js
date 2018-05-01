import React, { Component } from 'react'
import { Grid, Row, Thumbnail, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import "./AdminView.css";
import API from "../../utils/API";
import { InputAdmin, TextAreaAdmin, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";
import UpdateBtn from "../../components/UpdateBtn";

export default class AdminView extends Component {
  state = {
    thumbnails: [],
    id: "",
    photo: "",
    title: "",
    description: "",
    price: "",
  };
  componentDidMount() {
    this.loadThumbnails();
  }

  loadThumbnails = () => {
    API.getThumbnails()
      .then(res => {
        console.log("Response:" + res);
        this.setState({ thumbnails: res.data, photo: "", title: "", description: "", price: "" })
      })
      .catch(err => console.log(err));
  };

  deleteThumbnail = id => {
    API.deleteThumbnail(id)
      .then(res => this.loadThumbnails())
      .catch(err => console.log(err));
  };

  updateForm = id => {
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("editButton").style.display="inline";
    API.getThumbnail(id)
    .then(res => {
      this.setState({
        id: res.data._id,
        photo: res.data.photo,
        title: res.data.title,
        description: res.data.description,
        price: res.data.price
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
    API.updateThumbnail(this.state.id, {
      photo: this.state.photo,
      title: this.state.title,
      description: this.state.description,
      price: this.state.price
    })
    .then(res => {
        this.setState({
        id: res.data._id,
        photo: res.data.photo,
        title: res.data.title,
        description: res.data.description,
        price: res.data.price
      });
      this.loadThumbnails();
      console.log("Updated Photo: " + res.data.photo);
    })
    .catch(err => console.log(err)); 
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.photo && this.state.description && this.state.price) {
      API.saveThumbnail({
        photo: this.state.photo,
        title: this.state.title,
        description: this.state.description,
        price: this.state.price
      })
        .then(res => this.loadThumbnails())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Grid className="content">
        <Col xs={12} md={6}>
        <Button className="select" href="/adminview">
          Farm
        </Button>
        <Button className="select" href="/adminviewcafe">
          Café
        </Button>
        <Button className="select" href="/adminviewlogin">
          Manage users
        </Button>
          <h1 className="heading">Entry Form</h1>
          <form>
            <InputAdmin 
              type="hidden"
              value={this.state.id}
              onChange={this.handleInputChange}
              name="id"
            />
            <InputAdmin
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <InputAdmin
              value={this.state.photo}
              onChange={this.handleInputChange}
              type="url"
              name="photo"
              placeholder="Link to Photo (http://www.google.com)"
            />
            <InputAdmin
              value={this.state.price}
              onChange={this.handleInputChange}
              type="text"
              name="price"
              placeholder="Price: $4.99"
            />
            <TextAreaAdmin
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description"
              placeholder="Description of products being sold"
            />
            <FormBtn
              id="editButton"
              className="btn btn-warning"
              disabled={!(this.state.photo && this.state.title && this.state.description && this.state.price)}
              onClick={this.handleUpdate}
            >
              Update Item
            </FormBtn>
            <FormBtn
              id="submitButton"
              className="btn btn-success"
              disabled={!(this.state.photo && this.state.title && this.state.description && this.state.price)}
              onClick={this.handleFormSubmit}
            >
              Submit Item
            </FormBtn>
          </form>
        </Col>
        <Col sm={12} md={6}>
          <h1 className="heading">Admin View - Fresh Farm</h1>
          {this.state.thumbnails.length ? (
              <ListGroup className="adminFarm">
                {this.state.thumbnails.map(thumbnail => (
                      <Col xs={12} md={4} key={thumbnail._id}>
                      <Thumbnail className="text-center" src={thumbnail.photo} alt="242x200">
                          <h5>{thumbnail.title}</h5>
                          <p>{thumbnail.description}</p>
                          <p>Price: {thumbnail.price}</p>
                          <UpdateBtn onClick={() => (this.updateForm(thumbnail._id))}/>
                          <DeleteBtn onClick={() => this.deleteThumbnail(thumbnail._id)} />
                        </Thumbnail>
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
