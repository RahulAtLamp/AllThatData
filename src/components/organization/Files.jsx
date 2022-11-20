import React, { useState } from "react";
import FilesInfo from "./FilesInfo";
import One from "./1.png";
import Two from "./2.png";
import Three from "./3.jfif";
import Four from "./4.png";
import Five from "./5.png";
import "./files.scss";

function Files() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="subs-main">
      <div className="subs-header">All Files</div>
      <div className="subs-imgs-main">
        <div className="subs-imgs">
          <div className="subs-img-bgs" onClick={togglePopup}>
            <div className="subs-img-txt">Web3 Builders</div>
            <div className="subs-img-txt">Project Flow</div>
            <img className="subs-img" src={One} />
          </div>
          <div className="subs-img-bgs" onClick={togglePopup}>
            <div className="subs-img-txt">Polygon</div>
            <div className="subs-img-txt">Details</div>
            <img className="subs-img" src={Two} />
          </div>
          <div className="subs-img-bgs" onClick={togglePopup}>
            <div className="subs-img-txt">Filecoin</div>
            <div className="subs-img-txt">Work Details</div>
            <img className="subs-img" src={Three} />
          </div>
          <div className="subs-img-bgs" onClick={togglePopup}>
            <div className="subs-img-txt">IPFS</div>
            <div className="subs-img-txt">Smart Contract</div>
            <img className="subs-img" src={Four} />
          </div>
          <div className="subs-img-bgs" onClick={togglePopup}>
            <div className="subs-img-txt">WorldCoin</div>
            <div className="subs-img-txt">Front End</div>
            <img className="subs-img" src={Five} />
          </div>
        </div>
        <div className="allsub-main">
          {isOpen && (
            <FilesInfo
              content={
                <>
                  <div className="allsub-item-header">
                    <img className="allsub-img" src={One} />
                  </div>
                  <button className="allsub-btn">Download</button>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Files;
