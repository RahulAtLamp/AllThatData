import React from "react";
import logo from "./web3orglogo.jfif";
import "./organization.scss";

function Organization() {
  const getOrg = async() => {
    try {
      const organizationInterface = new ethers.Contract(Atd_contract_address, Atd.abi, signer);
      const organization = await organizationInterface.createOrganization("Web3 Builders", "Build For the Future", "https://ipfs.io/ipfs/bafkreifjz64ymjfyndnz4uayjyowjnp5rslbknvmxbfsiyysufseo6aywq", "We aim to improve user experiences by helping creators own and monetize their content and giving them more control their data.", ["HR", "Admin", "Accounts", "Developer"]);
      console.log(organization);
    } catch (e) {
      console.log(e);
    }
  }


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
