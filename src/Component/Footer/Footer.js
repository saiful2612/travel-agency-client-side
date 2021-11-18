import React from "react";
import classes from "./Footer.module.css";
import logo from "../../images/logo.png";
const Footer = () => {
  //Footer Section
  return (
    <footer className={classes.footer}>
      <div className="container text-center">
        <div className={classes["footer-logo"]}>
          <h3>Travelo</h3>
        </div>
        <ul className={classes["quick-links"]}>
          <li>
            <a href="/"> Home</a>
          </li>
          <li>
            <a href="/"> Tours</a>
          </li>
          <li>
            <a href="/"> Privacy Policy</a>
          </li>
          <li>
            <a href="/"> Terms & Conditions</a>
          </li>
        </ul>
        <ul className={classes["social-icons"]}>
          <li>
            <i className="fab fa-facebook"></i>
          </li>
          <li>
            <i className="fab fa-twitter"></i>{" "}
          </li>
          <li>
            <i className="fab fa-instagram"></i>{" "}
          </li>
        </ul>
      </div>
      <p className={classes.copyright}>Copyright © 2022 All rights reserved</p>
    </footer>
  );
};

export default Footer;
