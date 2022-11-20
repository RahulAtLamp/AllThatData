import React from "react";
import logo from "./web3orglogo.jfif";
import "./organization.scss";

function Organization() {
  return (
    <div>
      <div className="org-sub">
        <img className="org-img" src={logo} />
        <div className="org-header">Web3 Builders</div>
        <div className="org-txt">
          We aim to improve user experiences by helping creators own and
          monetize their content and giving them more control their data.
        </div>
        <div className="org-tag">Build For the Future</div>
      </div>
    </div>
  );
}

export default Organization;
