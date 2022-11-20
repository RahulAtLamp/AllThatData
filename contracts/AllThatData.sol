// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract AllThatData{

    struct Organization{
        string name;
        string tagline;
        string logo;
        string description;
        string[] roles;
    }

    struct Users{
        string name;
        string image;
        string role;
        address oid;
    }

    mapping(address =>mapping(string=>string[]) ) RoleToDataMapping;
    mapping(address => Organization) organizationDetailsMapping;
    mapping(address => Users) userDetailsMapping;

    function createOrganization(string memory _name,string memory _tagline,string memory _logo,string memory _description, string[] memory _roles) public {

        organizationDetailsMapping[msg.sender] = Organization(_name,_tagline,_logo,_description,_roles);
    }

    function getOrganization(address _oid) public view returns(Organization memory){
        return organizationDetailsMapping[_oid];
    }

     function registerUser(string memory _name, string memory _image,string memory _role, address _oid ) public {
        require(keccak256(abi.encodePacked(userDetailsMapping[msg.sender].name)) == keccak256(abi.encodePacked('')),"User is already Registered");
        userDetailsMapping[msg.sender] = Users(_name,_image,_role,_oid);
    }

    function getUser(address _user) public view returns(Users memory){
       return userDetailsMapping[_user];
    }

    function addDocuments(address _oid,string memory _role, string memory c_id) public {
        require(userDetailsMapping[msg.sender].oid == _oid,"You don't have authorization for this organization");
        require(keccak256(abi.encodePacked(userDetailsMapping[msg.sender].role)) == keccak256(abi.encodePacked(_role)),"You don't have authorization for this role");
         RoleToDataMapping[_oid][_role].push(c_id);
    }

    function getDocuments(address _oid, string memory _role) public view returns(string[] memory){
        return RoleToDataMapping[_oid][_role];
    }


}