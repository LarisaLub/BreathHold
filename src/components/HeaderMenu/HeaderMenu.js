import React from "react";
import PropTypes from "prop-types";
import  "./style.scss";



const Menu = () => {
  return (
      <ul className="menu">
          <li><a href="#home">Головна</a></li>
          <li><a href="#about">Про нас</a></li>
          <li><a href="#information">Додаткова інформація</a></li>
          <li><a href="#contacts">Контакти</a></li>
      </ul>
  );
};

export default Menu;


