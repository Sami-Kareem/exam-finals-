import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/footer.css';

export const Footr = () => {
  return (
    <div className="bg-dark text-center footer-landing">
      <img height="80" width="80" src="https://res.cloudinary.com/fahad-shahzad/image/upload/v1660318002/web3maker./icon_yrkmpm.png" alt="" />
      <div className="nav" style={{ marginLeft: "30rem" }}>
        <a role="button" className="nav-link" tabIndex="0" href="/">
          <span className="nav-item-2 font-bold-light" href="/">
            <span style={{ fontSize: "20px" }}>Web3Makr</span>
          </span>
        </a>
        <a role="button" className="nav-link" tabIndex="0" href="/">
          <span className="nav-item-2 font-bold-light" href="/">
            <span style={{ fontSize: "20px" }}>White Paper</span>
          </span>
        </a>
        <a role="button" className="nav-link" tabIndex="0" href="/">
          <span className="nav-item-2 font-bold-light" href="/">
            <span style={{ fontSize: "20px" }}>Services</span>
          </span>
        </a>
        <a role="button" className="nav-link" tabIndex="0" href="/">
          <span className="nav-item-2 font-bold-light" href="/">
            <span style={{ fontSize: "20px" }}>Tool</span>
          </span>
        </a>
        <a role="button" className="nav-link" tabIndex="0" href="/">
          <span className="nav-item-2 font-bold-light" href="/">
            <span style={{ fontSize: "20px" }}>Contact Us</span>
          </span>
        </a>
      </div>
      <div className="row mt-5">
        <div className="col-6 text-white">
          <p className="text-white font-bold-light">Copyright 2023
            <svg className="bi bi-info-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.88 9.14c1.28.06 1.61 1.15 1.63 1.66h1.79c-.08-1.98-1.49-3.19-3.45-3.19C9.64 7.61 8 9 8 12.14c0 1.94.93 4 24 3.84 4.24 2.22 0 3.41-1.65 3.44-2.95h-1.79c-.03.59-.45 1.38-1.63 1.44-1.31-.04-1.86-1.06-1.86-2.73 0-2.89 1.28-2.98 1.88-3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
            </svg> web 3makr.com
          </p>
        </div>
        <div className="col-4 text-white text-end me-50">
          <p>
            <a className="text-white font-bold-light me-50" target="_blank" href="https://www.instagram.com/web3makr/">
              <svg className="bi bi-instagram" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a5 5 0 0 0-5 5 5 5 0 0 0 10 0A5 5 0 0 0 12 2zm-1.75 8.268a7.002 7.002 0 0 0 3.482-6.016 7 7 0 1 0-14 0 7.002 7.002 0 0 0 3.482 6.016 9 9 0 1 1 7.036 0zM8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
              </svg>
            </a>
            <a className="text-white font-bold-light me-50" href="#">
              <svg className="bi bi-twitter" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
              </svg>
            </a>
            <a className="text-white font-bold-light" target="_blank" href="https://www.facebook.com/web3makr">
              <svg className="bi bi-facebook" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12  8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
