import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

const Footer = ({ references }) => {
  const contactReference = references[3].contactRef;
  return (
    <div className="footer-main">
      <div className="footer-links-container">
        <a
          href="https://www.linkedin.com/in/oswaldo-soto-8643ba23a/"
          target="_blank">
          {" "}
          <FontAwesomeIcon icon={faLinkedinIn} className="footer-link" />
        </a>
        <a href="https://github.com/oswaldojsotto" target="_blank">
          {" "}
          <FontAwesomeIcon icon={faGithubAlt} className="footer-link" />
        </a>
      </div>
      <div ref={contactReference}>
        <small className="footer-text">© Oswaldo J. Sotto</small>
      </div>
    </div>
  );
};

export default Footer;
