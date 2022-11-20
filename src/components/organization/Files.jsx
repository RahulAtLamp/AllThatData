import React, { useState } from "react";
import FilesInfo from "./FilesInfo";
import "./files.scss";

function Files() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="subs-main">
      <div className="subs-header">All Subscription</div>
      <div className="subs-imgs-main">
        <div className="subs-imgs">
          <div className="subs-img-bgs" onClick={togglePopup}>
            <div className="subs-img-txt">Name</div>
            <div className="subs-img-txt">Description</div>
            <img
              className="subs-img"
              src="https://logos-world.net/wp-content/uploads/2021/03/World-Health-Organization-WHO-Emblem.png"
            />
          </div>
          <div className="subs-img-bgs" onClick={togglePopup}>
            <div className="subs-img-txt">Name</div>
            <div className="subs-img-txt">Description</div>
            <img
              className="subs-img"
              src="https://logos-world.net/wp-content/uploads/2021/03/World-Health-Organization-WHO-Emblem.png"
            />
          </div>
          <div className="subs-img-bgs" onClick={togglePopup}>
            <div className="subs-img-txt">Name</div>
            <div className="subs-img-txt">Description</div>
            <img
              className="subs-img"
              src="https://logos-world.net/wp-content/uploads/2021/03/World-Health-Organization-WHO-Emblem.png"
            />
          </div>
          <div className="subs-img-bgs" onClick={togglePopup}>
            <div className="subs-img-txt">Name</div>
            <div className="subs-img-txt">Description</div>
            <img
              className="subs-img"
              src="https://logos-world.net/wp-content/uploads/2021/03/World-Health-Organization-WHO-Emblem.png"
            />
          </div>
          <div className="subs-img-bgs" onClick={togglePopup}>
            <div className="subs-img-txt">Name</div>
            <div className="subs-img-txt">Description</div>
            <img
              className="subs-img"
              src="https://logos-world.net/wp-content/uploads/2021/03/World-Health-Organization-WHO-Emblem.png"
            />
          </div>
        </div>
        <div className="allsub-main">
          {isOpen && (
            <FilesInfo
              content={
                <>
                  <div className="allsub-item-header">
                    <img
                      className="allsub-img"
                      src="https://logos-world.net/wp-content/uploads/2021/03/World-Health-Organization-WHO-Emblem.png"
                    />
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
