import React from "react";

function Dashboard({ businesses, allBusinesses, filteredBusinesses, setAllBusinesses, setFilteredBusinesses }) {
    const handleDelete = (id) => {
        fetch(`http://localhost:3001/businesses/${id}`,
            { method: "DELETE" })
            .then(() => {
                const updatedAll = allBusinesses.filter(
                    business => business.id !== id
                );
                const updatedFiltered = filteredBusinesses.filter(
                    business => business.id !== id
                );
                setAllBusinesses(updatedAll);
                setFilteredBusinesses(updatedFiltered);
            })
    };

    return (
        <div className="container my-4">
            <h3 className="text-center mb-4 fw-bold">Available Businesses</h3>
            <div className="row g-4">
                {businesses.map((business) => (
                    <div className="col-md-4" key={business.id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">{business.name}</h5>
                                <p className="text-muted mb-1">Category: {business.category}</p>
                                <p className="mb-1">Location: {business.location}</p>
                                <p className="mb-1">Contact: {business.contact}</p>
                                <p className="mt-2">{business.description}</p>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(business.id)}>
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
