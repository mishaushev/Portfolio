import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import firebase from "./firebase";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Project1 from "./Pages/Projects/1_Project";


function App() {
  const [Portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const ref = firebase.firestore().collection("Portfolio");
  
  function getPortfolio() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setPortfolio(items);
      setLoading(false);
    });
  }
  
  useEffect(() => {
    getPortfolio();
  }, []);
  
  if (loading) {
    return <h1>Loading...</h1>;
  }
  

  //Return the frontend
  return (
  <Router>  
    <div>
    <Route path="/about">
        <About />
    </Route>
    <Route path="/HomePage">
        <HomePage />
    </Route>

      <Header />
      <h1>Portfolio</h1>
      
        <Row>
          <Col xs="6"> 
            <Switch>
              <Route path="/Project1"> 
                
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
        {Portfolio.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
          </div>  
        ))}
      <Footer />
    </div>
  </Router>
    );
}

export default App;
