import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

function App() {
  const [allBusinesses, setAllBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/businesses")
      .then((res) => res.json())
      .then((data) => {
        setAllBusinesses(data);
        setFilteredBusinesses(data);
      });
  }, []);

  return (
    <BrowserRouter>
        <Header />

        <AppRoutes
          allBusinesses={allBusinesses}
          setAllBusinesses={setAllBusinesses}
          filteredBusinesses={filteredBusinesses}
          setFilteredBusinesses={setFilteredBusinesses}
        />

        <Footer />
    </BrowserRouter>
  );
}

export default App;
