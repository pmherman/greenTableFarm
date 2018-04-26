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

  render() {
    return (
      <Grid>
        <h1>Farm Fresh Products</h1>
        <Row>
          {this.state.thumbnails.length ? (
              <ListGroup>
                {this.state.thumbnails.map(thumbnail => (
                      <Col xs={6} md={4} key={thumbnail._id}>
                      <Thumbnail src={thumbnail.photo} alt="242x200">
                          <h3 className="text-center">{thumbnail.title}</h3>
                          <p className="text-center">{thumbnail.description}</p>
                          <p className="text-center" id="price">Price: {thumbnail.price}</p>
                        </Thumbnail>
                      </Col>
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
