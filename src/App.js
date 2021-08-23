import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import Header from "./Components/Header.js";

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

return (
    <div>
      <Header />
        <h1>Portfolio</h1>
        {Portfolio.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
          </div>  
        ))}
    </div>
  );
}

export default App;
