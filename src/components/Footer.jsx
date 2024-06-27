import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-100 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/">Home</Link>
        <Link to="/AboutMe">About Me</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact Me</Link>
      </nav>
      <aside>
        <p>
          Made with ❤️ by Faith O'Connor
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
