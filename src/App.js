import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import firebase from "./firebase";
import { Container, Row, Col } from "reactstrap";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";


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
  <BrowserRouter>  
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
          <Col xs="6">Column 1</Col>
          <Col xs="6">Column 2</Col>
        </Row>
        {Portfolio.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
          </div>  
        ))}
      <Footer />
    </div>
  </BrowserRouter>
    );
}

export default App;
