const Web3 = require("web3");
//const infura_url = "https://ropsten.infura.io/v3/e94d0d07e6d344de8f7bde30a57c0e7b";
const ganache_url = "http://127.0.0.1:8545";
const web3 = new Web3(ganache_url);

const abi = [
	{
		"inputs": [],
		"name": "getAge",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setAge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const address = '0x344416c51305337E96d6a79034cf7867B1943963';

let contract = new web3.eth.Contract(abi, address);
//console.log(contract);
//console.log(contract);
contract.methods.getAge().call((err, result)=>{
    console.log("getAge() => ", result);
//    document.querySelector('#res').innerHTML = `getName() function output is ${result}`;
});