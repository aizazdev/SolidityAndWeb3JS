//const Web3 = require('web3');
// console.log(Web3);
//connecting with infura.io using ropstan network

const rpcUrl = "https://ropsten.infura.io/v3/e94d0d07e6d344de8f7bde30a57c0e7b";
let web3 = new Web3(rpcUrl);
// console.log("rpc -> ", web3);

const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "setName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const address = "0xb91dc96a8E73Edc2a0F5c67bE0CE67eBf689E500";

let contract = new web3.eth.Contract(abi, address);
//console.log(contract);
contract.methods.getName().call((err, result)=>{
    console.log("getName() => ", result);
    document.querySelector('#res').innerHTML = `getName() function output is ${result}`;
});