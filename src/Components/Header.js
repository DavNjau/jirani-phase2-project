import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="jirani-header">
      <div className="header-left"></div>

      <div className="header-center">
        <h1 className="jirani-title">Jirani</h1>
        <p>Connecting local businesses near you</p>
      </div>
    </header>
  );
}

export default Header;

