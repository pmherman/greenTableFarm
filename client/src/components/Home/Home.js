import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Carousel, Image, Grid, Row } from 'react-bootstrap';
import './Home.css'

class Home extends Component {

  render () {
    return(
      <Grid>
      <Carousel>
        <Carousel.Item>
          <Image alt="Kendra and Tyler" src="./assets/home.jpg" />
          {/* <Carousel.Caption>
            <h3>Welcome</h3>
            <p>Green Table Farm has much to offer, from hosting weddings, catering events, hosting campers, Farmer's Markets, and much more!</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image alt="Durango Farmers Market" src="./assets/FarmersMarket.jpg" />
          {/* <Carousel.Caption>
            <h3>Come Visit at Durango Farmer's Market</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <Image alt="Green Table Cafe Bus" src="./assets/cafeBus.jpg" />
          {/* <Carousel.Caption>
            <h3>Green Table Cafe Bus</h3>
            <p>Visit "Cafe" to find out more about Green Table Cafe!</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
        <Grid>
        <Row>
          <p className="Summary">Green Table Farm has much to offer, from hosting weddings, catering events, hosting campers, Farmer's Markets, and much more!</p>
        </Row>
        </Grid>
      </Grid>
    )
  }
}
  
export default Home;
