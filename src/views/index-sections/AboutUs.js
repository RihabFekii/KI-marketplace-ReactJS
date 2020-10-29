import React from "react";

// reactstrap components
import { Button,  Container, Row, Col } from "reactstrap";




function AboutUs() {
    return (
        <>
        <div id="about-us" className="section">
          <Container className="text-center">
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h1 className="title" style = {{color : "rgb(213, 14, 4"}}>About Us</h1>
                
                
                <h3 className="description" style = {{color : "black", paddingBottom : "50px"}} > The AI marketplace is a place where companies and research institutions work together to build an innovation
                 ecosystem around a digital platform that brings together AI experts, solution providers and manufacturing 
                 companies. This digital platform will be gradually expanded to include functionalities that enable the joint 
                 development of AI solutions for product creation as well as their provision. </h3>
                
                </Col>

          </Row>
        </Container>

        <div className="col text-center">
                <Button
                  className="btn-round"
                  outline
                  color="danger"
                  href="/ai-marketplace"
                  size="lg"
                  target="_blank"
                  style = {{ marginRight :"10px"}}
                >
                    <i className="fa fa-database mr-1" />
                   Data marketplace
                </Button>

                <Button
                  className="btn-round"
                  outline
                  color="danger"
                  href="/ai-marketplace"
                  size="lg"
                  target="_blank"
                  style = {{ marginLeft :"10px"}}
                >
                    
                    <i className="fa fa-cubes mr-1" />
                     AI marketplace
                </Button>

              </div>


      </div>
    </>
  );
}

export default AboutUs;
