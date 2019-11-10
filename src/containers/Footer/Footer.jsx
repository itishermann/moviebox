import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer container-fluid py-3">
      <div className="row">
        <div className="copyright col text-center">
          <div>Made with love with ReactJS, Material UI and TVAPI</div>
          <div>
            Copyright &copy; 2019. All rights
            reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
