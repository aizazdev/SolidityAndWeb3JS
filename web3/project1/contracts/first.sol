pragma solidity ^0.5.1;

contract First {
    int internal age = 20;
    int private age2 = 40;
    int public constant age3 = 60;
    int public age4 = 14;

    function reveivePayment() public payable {

    }

    function checkBalance() public view returns(uint) {
        return address(this).balance;
    }
}