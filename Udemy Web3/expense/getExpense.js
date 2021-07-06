const Web3 = require('web3');
const ganache_url = "http://127.0.0.1:8545";

const web3 = new Web3(ganache_url);
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "setTransaction",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "transactionCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "transactionDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "transactions",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const address = "0x004C0cBB99E492924b46b0f08d8895090104ADeA";
const contract = new web3.eth.Contract(abi, address);
const {name, amount} = contract.methods.transactionDetails().call((err, response) => {
    console.log("response => ", response[0]);
});
let n = 0;
let count = async ()=> {
    await contract.methods.transactionCount().call((err, response)=> {
        n = response;
    })
};
count();
const run = async ()=> {
    for(let i=0; i<2; i++) {
        const{name, amount} = await contract.methods.transactions(i).call();
        console.log(name, amount);
    }
};
run();