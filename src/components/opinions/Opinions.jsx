import React from "react";

import logo from "../../assets/logo.svg"

const Opinions = () => {
  return (
    <div className="container">
      <div className="media">
        <img
          src={logo}
          alt=""
          width="64px"
          height="64px"
          className="mr-3"
        />
        <div className="media-body">
          <h5>Diana</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            aspernatur voluptatem hic nisi accusamus unde iste dignissimos
            eligendi quo dolor.
          </p>
          <div className="media border-top p-2">
            <img
              src={logo}
              alt=""
              width="64px"
              height="64px"
              className="mr-3"
            />
            <div className="media-body">
              <h5>Nicole</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, corrupti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinions;
