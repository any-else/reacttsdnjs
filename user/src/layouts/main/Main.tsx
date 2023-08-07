import React from "react";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
