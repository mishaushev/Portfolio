import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Pages/About";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Project1 from "./Projects/1_Project";

const HomePage = () => {
    return(
        <Router>  
        <div>
          <Header />
          <h1>Portfolio</h1>
          
            <Row>
              <Col xs="6"> 
                <Switch>
                  <Route path="/Project1"> 
                    <Project1 />
                  </Route>
                </Switch> Column 1, Row 1
              </Col>
    
              <Col xs="6">Column 2, Row 1</Col>
            </Row>
    
            <Row>
              <Col xs="6">Column 1, Row 2</Col>
              <Col xs="6">Column 2, Row 2</Col>
            </Row>
            <Row>
              <Col xs="6">Column 1, Row 3</Col>
              <Col xs="6">Column 2, Row 3</Col>
            </Row>
            <Row>
              <Col xs="6">Column 1, Row 4</Col>
              <Col xs="6">Column 2, Row 4</Col>
            </Row>
            <Row>
              <Col xs="6">Column 1, Row 5</Col>
              <Col xs="6">Column 2, Row 5</Col>
            </Row>

          <Footer />
        </div>
      </Router>
    );

}

export default HomePage;