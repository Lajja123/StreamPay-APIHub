// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract APIListing {
    address public owner;
    uint256 public totalAPIs;

    struct API {
        string name;
        string description;
        uint256 price; // Price in wei (smallest unit of Ether)
        address walletAddress;
        string image; // You can store the image's IPFS hash or its URL
    }

    mapping(uint256 => API) public apis;

    // Events
    event APIAdded(uint256 indexed apiId, string name, uint256 price);
    event APIUpdated(uint256 indexed apiId, string name, uint256 price);
    event APIDeleted(uint256 indexed apiId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addAPI(
        string memory _name,
        string memory _description,
        uint256 _price,
        address _walletAddress,
        string memory _image
    ) public onlyOwner {
        totalAPIs++;
        apis[totalAPIs] = API(_name, _description, _price, _walletAddress, _image);
        emit APIAdded(totalAPIs, _name, _price);
    }

    function updateAPI(
        uint256 _apiId,
        string memory _name,
        string memory _description,
        uint256 _price,
        address _walletAddress,
        string memory _image
    ) public onlyOwner {
        require(_apiId <= totalAPIs, "API does not exist");
        apis[_apiId] = API(_name, _description, _price, _walletAddress, _image);
        emit APIUpdated(_apiId, _name, _price);
    }

    function deleteAPI(uint256 _apiId) public onlyOwner {
        require(_apiId <= totalAPIs, "API does not exist");

        // Move the last API to the deleted position and then delete the last entry
        apis[_apiId] = apis[totalAPIs];
        delete apis[totalAPIs];
        totalAPIs--;

        emit APIDeleted(_apiId);
    }

    function getAPI(uint256 _apiId) public view returns (API memory) {
        require(_apiId <= totalAPIs, "API does not exist");
        return apis[_apiId];
    }
}
