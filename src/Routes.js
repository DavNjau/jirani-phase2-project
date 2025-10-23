import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import RegistrationForm from "./Components/RegistrationForm";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Filter from "./Components/Filter"

function AppRoutes({
  allBusinesses,
  setAllBusinesses,
  filteredBusinesses,
  setFilteredBusinesses,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="d-flex justify-content-center my-5">
            <div style={{ maxWidth: "600px", width: "100%" }}>
              <Home />
            </div>
          </div>
        }
      />
      <Route
        path="/register"
        element={
          <div className="d-flex justify-content-center my-5">
            <div style={{ maxWidth: "500px", width: "100%" }}>
              <RegistrationForm />
            </div>
          </div>
        }
      />
      <Route
        path="/dashboard"
        element={
          <div className="d-flex flex-column align-items-center my-5">
            <div style={{ maxWidth: "700px", width: "100%" }}>
              <Filter
                allBusinesses={allBusinesses}
                setFilteredBusinesses={setFilteredBusinesses}
              />
            </div>

            <div className="container my-5">
              <Dashboard
                businesses={filteredBusinesses}
                allBusinesses={allBusinesses}
                filteredBusinesses={filteredBusinesses}
                setAllBusinesses={setAllBusinesses}
                setFilteredBusinesses={setFilteredBusinesses}
              />
            </div>
          </div>
        }
      />
      < Route
        path="/about"
        element={
          < div className="container my-5" >
            <About />
          </div >
        }
      />
    </Routes >
  );
}

export default AppRoutes;
