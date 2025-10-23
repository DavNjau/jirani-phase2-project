import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="fw-bold text-primary mb-3">Welcome to Jirani</h1>
        <p className="lead mb-4">
          Jirani helps local entrepreneurs connect with their communities and
          grow their businesses online. Showcase your business, reach new
          customers, and become part of a growing network of trusted local
          service providers.
        </p>
        <Link to="/register" className="btn btn-primary btn-lg">
          Register Your Business
        </Link>
      </div>
    </div>
  );
}

export default Home;
