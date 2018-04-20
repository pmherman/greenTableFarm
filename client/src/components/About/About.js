import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import MapContainer from '../MapContainer';
import { relative } from 'upath';

const style = {
  position: relative
}

class About extends Component {
  render() {
    return (
      <div>
       <Row>
          <div>
            <h2 className="col-lg-6">Where Are We Located?</h2>
            <h2 className="col-lg-6">What are people saying?</h2>

          </div>
       </Row>
       <Row>
        <MapContainer 
          className="col-lg-5" 
          style={style}
          />
        <div className="col-lg-6">
          <h1>FACEBOOK</h1>
        </div>
        </Row>
      </div>
    )
  }
}

export default About;
