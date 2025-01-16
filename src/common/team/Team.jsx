import React from "react";

const Team = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-primary text-center p-3">OFFICE BEARERS</h1>
      <div className="row m-5 p-3">
        <div className="col-md-3 d-flex flex-column text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            alt=""
            width={200}
            className="mx-auto"
          />
          <h4 className="mt-3">CHAIRMAN</h4>
          <p className="text-primary fw-bold">BHUVAANESH R</p>
        </div>
        <div className="col-md-3 d-flex flex-column text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            alt=""
            width={200}
            className="mx-auto"
          />
          <h4 className="mt-3">VICE CHAIRMAN</h4>
          <p className="text-primary fw-bold">JODERICK SHERWIN</p>
        </div>
        <div className="col-md-3 d-flex flex-column  text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            alt=""
            width={200}
            className="mx-auto"
          />
          <h4 className="mt-3">
            SECRETARY & <br /> TREASURER
          </h4>
          <p className="text-primary fw-bold">DEEPIGA DHARSHINI C</p>
        </div>
        <div className="col-md-3 d-flex flex-column text-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            alt=""
            width={200}
            className="mx-auto"
          />
          <h4 className="mt-3">WEBMASTER</h4>
          <p className="fw-bold text-primary">BHARATH KUMAR L</p>
        </div>
      </div>
      <div className="row">
        
      </div>
    </div>
  );
};

export default Team;
