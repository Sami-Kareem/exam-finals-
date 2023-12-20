// hero.js
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/hero.css';

export const HeroSec = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container-fluid myhero">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 style={{ fontSize: "100px" }} className="text-center text-white">Web3Makr Redefining</h1>
              <h4 style={{ fontSize: "60px" }} className="text-center text-white">How You Create</h4>
              <h6 style={{ fontSize: "40px" }} className="text-center text-white">Unlock the blockchain potential to create Web3Applications</h6>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center mt-5">
              {/* Open the modal on button click */}
              <button className="btn-demo" onClick={handleModalShow}>
                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PlayCircleFilledWhiteIcon" style={{ color: "white" }}>
                  <path transform="scale(0.5, 0.5)" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Video Modal */}
          <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Video Title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* Embed your video player here, for example using an iframe */}
              <iframe width="560" height="315" src="https://www.youtube.com/embed/your-video-id" title="Video Title" frameBorder="0" allowFullScreen></iframe>
            </Modal.Body>
            <Modal.Footr>
              <Button variant="secondary" onClick={handleModalClose}>
                Close
              </Button>
            </Modal.Footr>
          </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
