pragma solidity ^0.5.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Adoption.sol";

contract TestAdoption {
    Adoption adoption = Adoption(DeployedAddresses.Adoption());
    uint expectedPetId = 8;
    address expedtedAdopter = address(this);

    function testAdoptPet() public {
        uint returnId = adoption.adopt(expectedPetId);
        Assert.equal(returnId, expectedPetId, "Adoption of the expected pet should match what is returned.");
    }

    function testAdoptPetUsers() public {
        address[16] memory adopters = adoption.getAdopters();
        Assert.equal(adopters[expectedPetId], expedtedAdopter, "Owner of the expected pet should be this contract");
    }
}