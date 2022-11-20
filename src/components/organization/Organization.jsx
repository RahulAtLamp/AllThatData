import React from "react";
import "./organization.scss";

function Organization() {
  return (
    <div>
      <div className="org-sub">
        <img
          className="org-img"
          src="https://logos-world.net/wp-content/uploads/2021/03/World-Health-Organization-WHO-Emblem.png"
        />
        <div className="org-header">Organization Name</div>
        <div className="org-txt">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum velit
          officia illo facere minus veniam quae quia molestias ipsa eum neque
          cupiditate in officiis, quod tenetur architecto quidem error
          voluptate.
        </div>
        <div className="org-tag">Tagline</div>
      </div>
    </div>
  );
}

export default Organization;
