import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <p className="mb-1">© {new Date().getFullYear()} Jirani — All Rights Reserved</p>
      <div>
        <a href="tel:+254702937303" className="text-white me-3">
          <i className="fa fa-phone me-1"></i>
        </a>
        <a href="mailto:njau670@gmail.com" className="text-white me-3">
          <i className="fa fa-envelope me-1"></i>
        </a>
        <a href="https://x.com/BapoCap13" target="_blank" className="text-white">
          <i className="fa-brands fa-twitter me-1"></i>
        </a>
      </div>
    </footer>

  );
}

export default Footer;
