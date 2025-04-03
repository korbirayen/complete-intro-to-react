import React from "react";
import Gh from "./github";
import Tw from "./twitter";
import Li from "./linkedin";

export default function Footer({ twitter, linkedin, github }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Rayen Korbi</h3>
          <p>Web Developer & Software Engineer</p>
          <p>Building modern web experiences with React and JavaScript</p>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <ul className="socials">
            <li className="social">
              <a href="https://x.com/k0_ryn" target="_blank" rel="noopener noreferrer">
                <Tw /> Twitter
              </a>
            </li>
            <li className="social">
              <a href="https://github.com/korbirayen" target="_blank" rel="noopener noreferrer">
                <Gh /> GitHub
              </a>
            </li>
            <li className="social">
              <a href="https://www.linkedin.com/in/rayen-korbi-4ab072240/" target="_blank" rel="noopener noreferrer">
                <Li /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Rayen Korbi. All rights reserved.</p>
      </div>
    </footer>
  );
}
