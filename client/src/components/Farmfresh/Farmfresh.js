import React, { Component } from 'react'
import { Grid, Row, Thumbnail, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import "./Farmfresh.css";
import API from "../../utils/API";

export default class Farmfresh extends Component {
  state = {
    thumbnails: [],
    photo: "",
    title: "",
    description: ""
  };
  componentDidMount() {
    console.log("Test Console log");
    this.loadThumbnails();
  }

  loadThumbnails = () => {
    API.getThumbnails()
      .then(res => {
        console.log("Response:" + res);
        this.setState({ thumbnails: res.data, photo: "", title: "", description: "" })
      })
      .catch(err => console.log(err));
  };

  deleteThumbnail = id => {
    API.deleteThumbnail(id)
      .then(res => this.loadThumbnails())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveThumbnail({
        photo: this.state.photo,
        title: this.state.title,
        description: this.state.description
      })
        .then(res => this.loadThumbnails())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <Grid>
        <Row>
          {this.state.thumbnails.length ? (
              <ListGroup>
                {this.state.thumbnails.map(thumbnail => (
                  <ListGroupItem key={thumbnail._id}>
                      <Col xs={6} md={4}>
                        <Thumbnail src={this.state.thumbnails.photo} alt="242x200">
                          <h3>{this.state.thumbnails.title}</h3>
                          <p>{this.state.thumbnails.description}</p>
                        </Thumbnail>
                      </Col>
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Row>
      </Grid>
    )
  }
}
