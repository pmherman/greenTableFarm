import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import MapContainer from '../MapContainer';
import { relative } from 'upath';
import Facebook from "../Facebook";
import "./About.css";

const style = {
  position: relative
}

class About extends Component {
  render() {
    return (
      <div>
       <Row className="text-center">
          <div>
            <h2 className="col-lg-6 col-sm-12">Where Are We Located?</h2>
          </div>
       </Row>
       <Row className="text-center">
        <MapContainer 
          className="col-lg-6 col-sm-12" 
          style={style}
          /> 
        <div className="col-lg-6 col-sm-12 small">
        <Facebook />
        </div>
        </Row>
      </div>
    )
  }
}

export default About;
