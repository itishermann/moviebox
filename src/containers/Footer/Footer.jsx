import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer container py-3">
      <div className="row">
        <div className="copyright col text-center">
          <div>Made with <span className="heart">&#10084;</span> with <a href="https://reactjs.org/"  target="_blank" rel="noopener noreferrer" aria-label="Get more information">ReactJS</a>, <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer" aria-label="Get more information">Material UI</a> and <a href="https://www.tvmaze.com/api" target="_blank" rel="noopener noreferrer" aria-label="Get more information">TVAPI</a></div>
          <div>
            By <a href="https://itishermann.me/" target="_blank" rel="noopener noreferrer" aria-label="Get more information">@itishermann</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
