import React from "react";
import styles from "./index.module.css";


const Navbar = () => {
  return (
    <nav className={styles.forte}>
      <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="contact.asp">Contact</a></li>
  <li><a href="about.asp">About</a></li>
</ul>
    </nav>
  );
};

export default Navbar;
