import React from "react";
import Col from "react-bootstrap/Col";

export default class CutImage extends React.Component {
    render() {
        const Image = this.props.src;
        return (
            <>
                <Col md={6} className="cut-left d-none d-md-block align-self-stretch" 
                    style={{opacity: 0.17, backgroundSize: "cover", backgroundImage: `url(${Image})`}}>
                                    
                </Col>
                <Col md={6} className="cut-top d-block d-md-none">
                    <img src={Image} className="img-fluid semi-transparent"/>
                </Col>
            </>
        )
    }
}