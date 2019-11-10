import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css';

const Page404 = () => {
  return (
    <div className="Page404 container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="material-card">
            <h4 className="card-header text-white bg-danger">
              404 - Page not found !
            </h4>
            <div className="card-body text-center">
              <svg className="text-danger" style={{ width: "70px", height: "70px" }} viewBox="0 0 24 24">
                <path fill="#000000" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5M14.77,17.23C14.32,16.5 13.25,16 12,16C10.75,16 9.68,16.5 9.23,17.23L7.81,15.81C8.71,14.72 10.25,14 12,14C13.75,14 15.29,14.72 16.19,15.81L14.77,17.23M15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11Z" />
              </svg>
              <div className="text-center py-3 error-text text-secondary">
                Sorry, we couldn't find the page you were looking for !
              </div>
              <Link className="text-danger" to="/">Go home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404;