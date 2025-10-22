import React, { useState } from "react";

function Filter({ allBusinesses, setFilteredBusinesses }) {
  const [category, setCategory] = useState("");

  const handleFilter = () => {
    if (category === "") {
      setFilteredBusinesses(allBusinesses);
    } else {
      const filtered = allBusinesses.filter(
        (business) => business.category === category
      );
      setFilteredBusinesses(filtered);
    }
  };

  return (
    <div className="d-flex gap-2 mb-3">
      <select
        className="form-select"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Butchery">Butchery</option>
        <option value="Electronics">Electronics</option>
        <option value="Beauty & Hair">Beauty & Hair</option>
        <option value="Auto Services">Auto Services</option>
        <option value="Health">Health</option>
        <option value="Bakery">Bakery</option>
        <option value="Fashion">Fashion</option>
        <option value="Agriculture">Agriculture</option>
        <option value="Tailoring">Tailoring</option>
        <option value="Laundry">Laundry</option>
      </select>
      <button className="btn btn-primary" onClick={handleFilter}>
        Filter
      </button>
    </div>
  );
}

export default Filter;
