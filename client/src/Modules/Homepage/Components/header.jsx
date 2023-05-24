import React from 'react';
import '../../../assets/styles/css/header.css'; // Import the CSS file for your component

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="nav">
          <i className="fa-brands fa-instagram"></i>
          <img src="../../assets/img/logo-text.png" alt="" />
          <i className="fa-solid fa-bars" onClick={openNav}></i>
        </div>
      </div>
      <div className="image-container">
        <div className="couvee-text">
          <img src="../../assets/img/couvee-text.png" alt="" />
        </div>
        <div className="image-hands-container">
          <img className="right-hand" src="../../assets/img/couvee-right-hand2.png" alt="" />
          <img className="left-hand" src="../../assets/img/couvee-left-hand3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;