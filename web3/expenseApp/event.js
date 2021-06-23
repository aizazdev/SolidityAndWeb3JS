const Tx = require("ethereumjs-tx");
const Web3 = require("web3");

const rpcUrl = "https://ropsten.infura.io/v3/e94d0d07e6d344de8f7bde30a57c0e7b";
const web3 = new Web3(rpcUrl);

const abi = [
	{
		"inputs": [],
		"name": "eventFire",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "logString",
		"type": "event"
	},
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

const address = "0xa56e1e2a2e2cb3589088d66e80ed4d933c495007";
let contract = new web3.eth.Contract(abi, address);

contract.getPastEvents(
    "AllEvents", {
        fromBlock: 0,
        toBlock: 'latest',
    },
    (err, events) => {
        console.log('Events => ', events);
        console.log("Error => ", err);
    }
);