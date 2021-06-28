const rpcUrl = "HTTP://127.0.0.1:8545";

const web3 = new Web3(rpcUrl);

const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_income",
				"type": "uint256"
			}
		],
		"name": "setIncome",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getIncome",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const address = "0x36e48Fc4300BD6AC39dBBF0cB1D8eA49512d344F";

const contract = new web3.eth.Contract(abi, address);

contract.methods.getIncome().call((err, result) => {
	console.log("result is ", result);
	console.log("err is ", err);
});