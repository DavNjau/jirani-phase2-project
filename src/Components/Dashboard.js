import React, { useEffect, useState } from "react";

function Dashboard() {
  const [businesses, setBusinesses] = useState([]);

  const cardStyle = {
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    padding: "16px",
    backgroundColor: "#ffffff",
  };

  const cardHover = {
    transform: "scale(1.03)",
  };

  useEffect(() => {
    fetch("http://localhost:3001/businesses")
      .then((res) => res.json())
      .then((data) => setBusinesses(data))
      .catch((err) => console.error("Error loading businesses:", err));
  }, []);

  return (
    <div className="container my-4">
      <h3 className="text-center mb-4 fw-bold">Available Businesses</h3>
      <div className="row g-4">
        {businesses.map((biz) => (
          <div className="col-md-4" key={biz.id}>
            <div
              className="card h-100"
              style={cardStyle}
            >
              <div className="card-body">
                <h5 className="card-title fw-semibold">{biz.name}</h5>
                <p className="text-muted mb-1">Category: {biz.category}</p>
                <p className="mb-1">Location: {biz.location}</p>
                <p className="mb-1">Contact: {biz.contact}</p>
                <p className="mt-2">{biz.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
