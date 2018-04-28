import React, { Component } from 'react';
import "./Cafe.css";
import { Grid, Row, Thumbnail, Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import API from "../../utils/API";

class Cafe extends Component {
  state = {
    cafes: [],
    photo: "",
    title: "",
    description: ""
  };

  componentDidMount() {
    this.loadCafes();
  }

  loadCafes = () => {
    API.getCafes()
      .then(res => {
        this.setState({ cafes: res.data, photo: "", title: "", description: "", price: "" })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Grid>
        <h1 className="text-center">Enjoy our Café Services</h1>
        <img className="coverPhoto text-center" src="/assets/images/coverPhoto.jpg" alt="Cover Photo" />
        <Row>
          {this.state.cafes.length ? (
              <ListGroup>
                {this.state.cafes.map(cafe => (
                      <Col xs={6} md={4} key={cafe._id}>
                      <Thumbnail src={cafe.photo} alt="242x200">
                          {console.log("cafe.title: " + cafe.title)}
                          <h3 className="text-center">{cafe.title}</h3>
                          <p className="text-center">{cafe.description}</p>
                          <p className="text-center" id="price">Price: {cafe.price}</p>
                        </Thumbnail>
                      </Col>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Row>
        <div className="push"></div>
      </Grid>
    )
  }
}

export default Cafe;