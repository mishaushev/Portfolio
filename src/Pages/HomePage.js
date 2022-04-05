import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import About from "../Pages/About";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Project1 from "./Projects/1_Project";

ReactDOM.render((
  <BrowserRouter>  
  <App />
</BrowserRouter>

))