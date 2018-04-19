import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { relative } from 'upath';
import "./Facebook.css";

const style = {
    width: "45vw",
    height: "50vh"
}

class Facebook extends Component {
    render() {
        return (
        <iframe 
            className = "facebook-reviews"
            style= {style}
            allowTransparency="true"
            allow="encrypted-media"
            display="initial"
            src="https://www.facebook.com/permalink.php?story_fbid=10116691030143684&id=9327905&substory_index=0" />        
        )
    }
} 

export default Facebook;