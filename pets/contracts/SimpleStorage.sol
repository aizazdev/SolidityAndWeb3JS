// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
    Transaction[] public transaction;

    struct Transaction {
        address transactionOwner;
        string transactionDescription;
        int64 amount;
    }
    
    function addTransaction(string memory description , int64 amount) public {
        Transaction memory tx1 = Transaction(msg.sender,description,amount);
        transaction.push(tx1);
    }
    
    function transactionCount() public view returns (uint){
        return transaction.length;
    }
    function transactionDetails() public returns(uint, string memory) {
        return(44, "Aizaz");
    }
}