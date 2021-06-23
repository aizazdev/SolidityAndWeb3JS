pragma solidity ^0.5.1;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/first.sol";

contract TestFirst {

    uint public initialBalance = 10 ether;

    function testAge() public{
        First meta = First(DeployedAddresses.first());
        meta.reveivePayment.value(2 ether)();
        Assert.equal(meta.checkBalance(), 2 ether, "value is 2 ethers");    
    }
}