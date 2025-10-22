import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <p className="mb-1">© {new Date().getFullYear()} Jirani — All Rights Reserved</p>
      <div>
        <a href="#" className="text-white me-3">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" className="text-white me-3">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="#" className="text-white">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
