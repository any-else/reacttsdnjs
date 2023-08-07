import React from "react";
import "./Header.css";
import { Images } from "../../../assets/Image";
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src={Images.Logo}
          alt=""
          style={{
            width: "6rem",
            height: "auto",
            objectFit: "contain",
            borderRadius: 30,
          }}
        />
      </div>
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
