import React, { Component } from 'react';
<<<<<<< HEAD
import { Row } from 'react-bootstrap';
=======
import { Grid, Row, Col } from 'react-bootstrap';
>>>>>>> master
import MapContainer from '../MapContainer';
import { relative } from 'upath';
// import Facebook from "../Facebook";
import "./About.css";

const style = {
  position: relative
}

class About extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <Row className="text-center">
          <div>
            <h2 className="col-lg-6 col-sm-12">Where Are We Located?</h2>
          </div>
        </Row>

        <Row className="text-center">
          <MapContainer className="col-lg-6 col-sm-12" style={style} /> 
          <div className="col-lg-6 col-sm-12 small">
            <iframe 
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftim.m.wilson1%2Fposts%2F10155436064349838%3A0&width=500" 
              title="facbook1"
              width="600" 
              height="373" 
              scrolling="no" 
              frameborder="0" 
              allowTransparency="true" 
              allow="encrypted-media">
            </iframe>
            <iframe 
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D10116691030143684%26id%3D9327905%26substory_index%3D0&width=500" 
              title="facbook2"
              width="600" 
              height="335" 
              scrolling="no" 
              frameborder="0" 
              allowTransparency="true" 
              allow="encrypted-media">
            </iframe>
            <iframe 
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmatt.margo%2Fposts%2F10100194791044636%3A2&width=500" 
              title="facbook3"
              width="600" 
              height="335" 
              scrolling="no" 
              frameborder="0" 
              allowTransparency="true" 
              allow="encrypted-media">
            </iframe>
          </div>
=======
      <div className="content">
       <Row>
          <Col sm={12} md={6}>
            <h2>Where Are We Located?</h2>
            <MapContainer 
              style={style}
          /> 
          </Col>
          <Col md={6} sm={12}>
            <h2>Facebook Reviews</h2>
            <div className="facebook" sm={12} md={6}>
          <iframe 
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftim.m.wilson1%2Fposts%2F10155436064349838%3A0&width=500" 
            width="600" 
            height="373" 
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media">
          </iframe>
          <iframe 
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D10116691030143684%26id%3D9327905%26substory_index%3D0&width=500" 
            width="600" 
            height="335" 
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media">
          </iframe>
          <iframe 
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmatt.margo%2Fposts%2F10100194791044636%3A2&width=500" 
            width="600" 
            height="335" 
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media">
          </iframe>
        </div>
          </Col>
>>>>>>> master
        </Row>
      </div>
    )
  }
}

export default About;
