import React, {useState} from 'react';
import Web3 from 'web3';
import {abi, networks} from './abi/Adoption.json';
import logo from './logo.svg';
import './App.css';

// const abi = [
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "adopters",
//     "outputs": [
//       {
//         "internalType": "address",
//         "name": "",
//         "type": "address"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "internalType": "uint256",
//         "name": "petId",
//         "type": "uint256"
//       }
//     ],
//     "name": "adopt",
//     "outputs": [
//       {
//         "internalType": "uint256",
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "getAdopters",
//     "outputs": [
//       {
//         "internalType": "address[16]",
//         "name": "",
//         "type": "address[16]"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   }
// ];

function App() {  
  let[account, setAccount] = useState("0x0");

  const load = async() => {
    if(Web3.givenProvider) {
      const web3 = new Web3(Web3.givenProvider);
      await Web3.givenProvider.enable(); 
      //const contract = new web3.eth.Contract(abi, ""); 
      let accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      console.log(networkId);
      const adoptData = abi.networks[networkId];
      console.log(adoptData);
      if(adoptData) {
        const contract = new web3.eth.Contract(abi, adoptData["address"]);
        console.log(await contract.methods.adopt(4).call());
        setAccount(accounts[0]);
        console.log(accounts);
      } 
      
    }
  }
  load();
  return (
    <div className="App">
      hello world
      <p>Account is {account}</p>
    </div>
  );
}

export default App;
